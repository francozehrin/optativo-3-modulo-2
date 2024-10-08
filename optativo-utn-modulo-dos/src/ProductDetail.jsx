import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Capturar el id de la URL
  const [product, setProduct] = useState(null);

  // Hacer la consulta a la API para traer el producto por su id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al traer el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Cantidad disponible:</strong> {product.rating.count}</p>

      {/* Botón de compra con mensaje */}
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetail;
