import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cafetería de Especialidad. Todos los derechos reservados.</p>
        <p>Atención de lunes a domingo | Envíos a todo el país</p>
      </div>
    </footer>
  );
}