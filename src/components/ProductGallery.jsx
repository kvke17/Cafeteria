import React from 'react';
import ProductCard from './ProductCard';
import cafeColombiano from '../assets/img/cafecolombiano.jpg';
import cafeEtiopia from '../assets/img/cafeetiopia.jpg';
import galletasArtisan from '../assets/img/galletasartesanales.jpg';
import prensaFrancesa from '../assets/img/prensafrancesa.jpg';

const products = [
  {
    id: 1,
    title: 'Café de Colombia',
    description: 'Notas dulces, caramelo y acidez cítrica balanceada.',
    price: 9990,
    image: cafeColombiano,
  },
  {
    id: 2,
    title: 'Café de Etiopía',
    description: 'Perfil floral, notas a jazmín y frutos silvestres.',
    price: 11990,
    image: cafeEtiopia,
  },
  {
    id: 3,
    title: 'Galletas Artesanales',
    description: 'Horneadas a diario, trozos de chocolate amargo.',
    price: 3500,
    image: galletasArtisan,
  },
  {
    id: 4,
    title: 'Prensa Francesa',
    description: 'Cuerpo completo y extracción limpia en acero inox.',
    price: 18990,
    image: prensaFrancesa,
  },
];

export default function ProductGallery() {
  return (
    <div className="product-gallery">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}