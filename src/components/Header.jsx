export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Cafetería de Especialidad</h1>
        <p>Los mejores granos seleccionados del mundo en tu mesa</p>
        <nav className="header-nav">
          <a href="#inicio" className="nav-btn">Inicio</a>
          <a href="#catalogo" className="nav-btn">Catalogo</a>
          <a href="#menu" className="nav-btn">Nosotros</a>
          <a href="#contacto" className="nav-btn">Contacto</a>
        </nav>
      </div>
    </header>
  );
}