import React from 'react';
import TarjetaProducto from './TarjetaProducto';

export default function GaleriaProducto({ productos }) {
  return (
    <div className="products-grid">
      {productos.map((prod) => (
        <TarjetaProducto key={prod.id} producto={prod} />
      ))}
    </div>
  );
}