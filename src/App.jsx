import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ProductGallery from './components/ProductGallery';
import ProductCard from './components/ProductCard';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

// Assets / Imágenes importadas en App
import cafeColombiano from './assets/img/cafecolombiano.jpg';
import cafeEtiopia from './assets/img/cafeetiopia.jpg';
import galletasArtisan from './assets/img/galletasartesanales.jpg';
import prensaFrancesa from './assets/img/prensafrancesa.jpg';

import './App.css';

export default function App() {
  const productos = [
    {
      id: 1,
      titulo: 'Café de Colombia',
      descripcion: 'Notas dulces, caramelo y acidez cítrica balanceada.',
      precio: 9990,
      imagen: cafeColombiano,
    },
    {
      id: 2,
      titulo: 'Café de Etiopía',
      descripcion: 'Perfil floral, notas a jazmín y frutos silvestres.',
      precio: 11990,
      imagen: cafeEtiopia,
    },
    {
      id: 3,
      titulo: 'Galletas Artesanales',
      descripcion: 'Horneadas a diario, trozos de chocolate amargo.',
      precio: 3500,
      imagen: galletasArtisan,
    },
    {
      id: 4,
      titulo: 'Prensa Francesa',
      descripcion: 'Cuerpo completo y extracción limpia en acero inox.',
      precio: 18990,
      imagen: prensaFrancesa,
    },
  ];

  return (
    <div className="app-container">
      <Header />
      <main>
        <section className="catalog-section" id="menu">
          <div className="section-header">
            <h2>Nuestro Catálogo</h2>
            <p>Encuentra tus variedades favoritas de café y complementos</p>
          </div>
          <div className="product-gallery">
            {productos.map((prod) => (
              <ProductCard
                key={prod.id}
                titulo={prod.titulo}
                descripcion={prod.descripcion}
                precio={prod.precio}
                imagen={prod.imagen}
              />
            ))}
          </div>
        </section>
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}