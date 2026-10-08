import React from 'react';
import GaleriaProducto from '../components/GaleriaProducto';

export default function Productos({ productos }) {
  return (
    <section className="productos-section">
      <h2>Nuestros Productos</h2>
      <GaleriaProducto productos={productos} />
    </section>
  );
}