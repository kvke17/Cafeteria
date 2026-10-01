import React, { useState } from 'react';

export default function ProductCard({ titulo, descripcion, precio, imagen }) {

    const [meGusta, setMeGusta] = useState(false);

    const alternar = () => {
        if (meGusta == false)
            setMeGusta(true)
        else
            setMeGusta(false)
    }

    const [AgregarCarrito, setAgregarCarrito] = useState(false);

    const Agregar = () => {
        if (AgregarCarrito == false)
            setAgregarCarrito(true)
        else
            setAgregarCarrito(false)
    }
  return (
    <article className="product-card">
      <img src={imagen} alt={titulo} className="product-card-img" />
      <div className="product-card-body">
        <h3 className="product-card-title">{titulo}</h3>
        <p className="product-card-desc">{descripcion}</p>
        <span className="product-card-price">${precio?.toLocaleString('es-CL')}</span>
        <button
          type="button"
          onClick={alternar}
          style={{
            backgroundColor: meGusta ? '#54463A' : '#d4d3d2',
            color: meGusta ? 'white' : '#110438',
            fontWeight: 'bold',
            marginTop: '0.75rem',
            padding: '0.5rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          {meGusta ? 'Eres un Coffe !!LOVER!!' : 'Agregar este Cafe en favoritos'}
        </button>

        <button
          type="button"
          onClick={Agregar}
          style={{
            backgroundColor: AgregarCarrito ? '#24a81f' : '#d4d3d2',
            color: AgregarCarrito ? 'white' : '#110438',
            fontWeight: 'bold',
            marginTop: '0.75rem',
            padding: '0.5rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          {AgregarCarrito ? '!!Agregaste Este Cafe Al Carrito!!' : 'Agregar al Carrito'}
        </button>
      </div>
    </article>
  );
}