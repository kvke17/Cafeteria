import React from 'react';
import { NavLink } from 'react-router-dom';
import { itemsMenu } from '../data/itemsMenu';

export default function Header() {
  const menu = itemsMenu || [
    { id: 1, label: 'Inicio', path: '/' },
    { id: 2, label: 'Productos', path: '/productos' },
    { id: 3, label: 'Registro', path: '/registro' },
    { id: 4, label: 'Nosotros', path: '/nosotros' }
  ];

  return (
    <header className="header">
      <nav className="nav">
        {menu.map((item) => (
          <NavLink 
            key={item.id}
            to={item.path} 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}