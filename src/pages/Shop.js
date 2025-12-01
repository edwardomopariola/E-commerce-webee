import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Shop() {
    const [products, setProducts] = useState([])   // State to hold the list of products fetched from the API

    useEffect(() => {   //useEffect hook to perform side effects in function components
        // using axios to fetch products from the API when the component mounts
        axios.get("https://fakestoreapi.com/products").then(res => {
            setProducts(res.data)   // Update the state with the fetched products
        }).catch(err => {
            console.error("Error fetching products:", err)
        })
    }, [])  // Empty dependency array ensures this runs only once on mount

    return (
        <div style={{ padding: "20px" }}>
            <h1>Products</h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
                        <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "200px" }}>
                            <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
                            <p style={{ fontWeight: "bold" }}>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}