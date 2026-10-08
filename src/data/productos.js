import cafeColombiano from "../assets/img/cafecolombiano.jpg";
import cafeEtiopia from "../assets/img/cafeetiopia.jpg";
import galletas from "../assets/img/galletasartesanales.jpg";
import prensa from "../assets/img/prensafrancesa.jpg";

export const productos = [
  { 
    id: 1, 
    nombre: 'Café Colombiano', 
    descripcion: 'Notas cítricas y suaves', 
    detalle: 'Origen Huila, tueste medio, 100% arábica.',
    precio: 8990, 
    imagen: cafeColombiano 
  },
  { 
    id: 2, 
    nombre: 'Café Etiopía', 
    descripcion: 'Floral y con acidez brillante', 
    detalle: 'Variedad Yirgacheffe lavado.',
    precio: 9990, 
    imagen: cafeEtiopia 
  },
  { 
    id: 3, 
    nombre: 'Galletas Artesanales', 
    descripcion: 'Horneadas diariamente', 
    detalle: 'Avena, miel y chocolate belga.',
    precio: 3500, 
    imagen: galletas 
  },
  { 
    id: 4, 
    nombre: 'Prensa Francesa', 
    descripcion: 'Método de inmersión 600ml', 
    detalle: 'Vidrio templado y émbolo de acero.',
    precio: 15990, 
    imagen: prensa 
  }
];

export default productos;