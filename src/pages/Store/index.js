import React, { useState, useEffect } from 'react';
import './style.css';

export const Store = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulando uma chamada à API para carregar os produtos (pode ser substituído por uma chamada real)
    fetch('http://localhost:3000/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao carregar produtos:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="product-page">
      <h2>Nossa Loja</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
            {/* Use a propriedade onError para carregar a imagem padrão se a imagem original falhar */}
            <img
              src={product.imageUrl || '/public/img/empty.jpeg'}
              alt={product.name}
              onError={(e) => {
                e.target.src = '/public/img/empty.jpeg';
              }}
            />
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>

      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="product-item">
            {item.name} - R${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
