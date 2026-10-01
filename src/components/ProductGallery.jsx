import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGallery({ productos }) {
  return (
    <div className="product-gallery">
      {productos && productos.map((prod) => (
        <ProductCard
          key={prod.id}
          titulo={prod.titulo}
          descripcion={prod.descripcion}
          precio={prod.precio}
          imagen={prod.imagen}
        />
      ))}
    </div>
  );
}