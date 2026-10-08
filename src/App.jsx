import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Productos from './views/Productos';
import DetalleProducto from './views/DetalleProducto';
import Registro from './views/Registro';
import Nosotros from './views/Nosotros';

import { productos } from './data/productos';
import './App.css';

export default function App() {
  const listaProductos = productos || [];

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos productos={listaProductos} />} />
            <Route path="/producto/:id" element={<DetalleProducto productos={listaProductos} />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}