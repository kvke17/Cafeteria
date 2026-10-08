import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TarjetaProducto({ producto }) {
  const navigate = useNavigate();
  const [esFavorito, setEsFavorito] = useState(false);

  const handleFavorito = () => {
    setEsFavorito(!esFavorito);
    alert(
      !esFavorito
        ? `"${producto.nombre}" añadido a favoritos`
        : `"${producto.nombre}" eliminado de favoritos`
    );
  };

  const handleCarrito = () => {
    alert(`"${producto.nombre}" añadido al carrito`);
  };

  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <span className="precio">${producto.precio.toLocaleString('es-CL')}</span>

      {/* Contenedor de acciones del producto */}
      <div className="card-actions">
        <button 
          className="btn-detalle"
          onClick={() => navigate(`/producto/${producto.id}`)}
        >
          Ver detalle
        </button>

        <button 
          className="btn-carrito"
          onClick={handleCarrito}
        >
          Añadir al carrito
        </button>

        <button 
          className={`btn-favorito ${esFavorito ? 'activo' : ''}`}
          onClick={handleFavorito}
        >
          {esFavorito ? '♥ En favoritos' : '♡ Añadir a favoritos'}
        </button>
      </div>
    </div>
  );
}