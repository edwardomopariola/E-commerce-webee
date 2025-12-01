import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Shop() {
    const [products, setProducts] = useState([])   // State to hold the list of products fetched from the API
    const [category, setCategory] = useState(["all"]) // State to hold the list of product categories
    const [q, setQ] = useState("") // State to hold the search query    

    useEffect(() => {   //useEffect hook to perform side effects in function components
        // using axios to fetch products from the API when the component mounts
        axios.get("https://fakestoreapi.com/products").then(res => {
            setProducts(res.data)   // Update the state with the fetched products
        }).catch(err => {
            console.error("Error fetching products:", err)
        })
    }, [])  // Empty dependency array ensures this runs only once on mount

    const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))]  // Extract unique categories from products;

    const filtered = products.filter(p=> {
        if(category!=="all" && p.category!==category) return false
        return p.title.toLowerCase().includes(q.toLowerCase()) // Add filtering logic here if needed
    });


    return (
        <div className="p-6">
            <div className="flex gap-4 mb-6">
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Product" className="border px-3 py-2 flex-1"/>
                <select value={category} onChange={e=>setCategory(e.target.value)} className="border px-3 py-2">
                    {categories.map(cat=> <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map(product=> (
                    <Link to={`/product/${product.id}`} key={product.id} className="border rounded p-4 hover:shadow">
                        <img src={product.image} alt={product.title} className="h-36 object-contain mx-auto"/>
                        <h3 className="mt-3 font-medium">{product.title}</h3>
                        <div className="mt-2 font-bold">${product.price}</div>
                    </Link>
                ))}

            </div>
        </div>
    )
}