import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DetalleProducto({ productos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => String(p.id) === String(id));

  if (!producto) {
    return (
      <div className="detalle-error">
        <h2>Producto no encontrado</h2>
        <button className="btn-volver" onClick={() => navigate('/productos')}>
          Volver a Productos
        </button>
      </div>
    );
  }

  return (
    <section className="detalle-container">
      <button className="btn-volver" onClick={() => navigate('/productos')}>
        &larr; Volver a Productos
      </button>

      <div className="detalle-card">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="detalle-descripcion">{producto.detalle || producto.descripcion}</p>
          <p className="detalle-precio">
            <strong>Precio:</strong> ${producto.precio.toLocaleString('es-CL')}
          </p>
        </div>
      </div>
    </section>
  );
}