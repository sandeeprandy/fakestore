import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const hideProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Store Products</h1>
      </header>

      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => showProductDetails(product)}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <p>{selectedProduct.description}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: RS{selectedProduct.price}</p>
          <button onClick={hideProductDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
