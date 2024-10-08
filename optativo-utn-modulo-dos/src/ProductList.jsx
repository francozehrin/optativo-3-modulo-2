import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al traer los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>

            {/* Navegar al detalle del producto */}
            <Link to={`/product/${product.id}`}>
              <button>Ver Detalle</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ProductList;
