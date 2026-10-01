import React from 'react';
import ProductGallery from './ProductGallery';

export default function Section() {
  return (
    <section className="catalog-section" id="menu">
      <div className="section-header">
        <h2>Nuestro Catálogo</h2>
        <p>Encuentra tus variedades favoritas de café y complementos</p>
      </div>
      <ProductGallery />
    </section>
  );
}