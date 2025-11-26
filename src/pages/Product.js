import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);  // State to hold the product details fetched from the API

    useEffect(() => {
        // Fetch product details from the API when the component mounts or when the id changes
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())   // Parse the JSON response when the fetch is complete
            .then(data => setProduct(data))  // Update the state with the fetched product details
            .catch(err => console.error("Error fetching product details:", err))
    }, [id])  // Dependency array includes id to refetch if it changes

    if (!product) {
        return <div>Loading...</div>;  // Show a loading message while the product details are being fetched
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px", objectFit: "contain" }} />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );

}

export default Product;