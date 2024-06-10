import React, { useState, useEffect } from 'react';

const ItemDetail = () => {
const [products, setProducts] = useState([]);


    const getProducts = async () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setProducts(res))
        .catch(error => console.error('Error fetching products:', error));
    };

    useEffect(() => {
    getProducts();
    }, []);

    const handleClick = (categoria) => 
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
    
        const searchProduct = (id) => 
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProducts([json]))

        
    

return (   
    <div>
    <div>
        <button onClick={getProducts}>Inicio</button>
        <button onClick={() => handleClick('electronics')}>Electronics</button>
        <button onClick={() => handleClick('jewelery')}>Jewelery</button>
    </div>
    <h2>Productos</h2>
    {products.map(pr => <p key={pr.id} onClick={() => searchProduct(pr.id)}>{pr.title}</p>
    )}
    </div>
);
};

export default ItemDetail;


