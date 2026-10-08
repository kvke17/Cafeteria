import React, { useState } from 'react';

export default function FormularioRegistro() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.password !== datos.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert(`Usuario ${datos.nombre} registrado con éxito`);
  };

  return (
    <div className="contacto-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datos.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={datos.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarPassword"
            value={datos.confirmarPassword}
            onChange={handleChange}
            placeholder="Repite tu contraseña"
            required
          />
        </div>

        <button type="submit" className="btn-enviar">Registrarse</button>
      </form>
    </div>
  );
}