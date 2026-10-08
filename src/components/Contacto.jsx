import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contacto() {
  return (
    <section id="contacto" className="seccion">
      <h2>Contacto y pedidos</h2>
      <p>¿Quieres hacer un pedido o tienes consultas?</p>
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingresa correo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ingresa tu mensaje" />
        </Form.Group>

        <Button variant="warning" type="submit" className="mb-3">
          Enviar Mensaje
        </Button>
      </Form>
    </section>
  );
}