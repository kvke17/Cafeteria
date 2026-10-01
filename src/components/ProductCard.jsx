import React from 'react';

export default function ProductCard({ image, title, description, price }) {
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-card-img" />
      <div className="product-card-body">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-desc">{description}</p>
        <span className="product-card-price">${price.toLocaleString('es-CL')}</span>
      </div>
    </article>
  );
}