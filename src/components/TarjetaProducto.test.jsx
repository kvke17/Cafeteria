import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";


import TarjetaProducto from './TarjetaProducto';
import moka from '../assets/img/moka'

describe('TarjetaProducto',()=> {
    it ('Debe cambiar el texto del boton "Guardado en favoritos" al hacer clic', () =>{

        //1 - preparacion (ARRANGE)
        // imagen, nombre, descripcion, precio
            const productoMock = {
                imagen: moka,
                nombre: 'Moka',
                descripcion: 'Cafe Sabor moka',
                precio: 4500

            }
        

        //2 -  Ejecucion (ACT)
            render(<TarjetaProducto {...productoMock}/>)

        // Buscamos el boton de la tarjeta
            const boton = screen.getByRole('button');

        // Simulamos el clic
        fireEvent.click(boton);

        //3 - Verifica el resultado(ASSERT)
        expect(boton.textContent).toContain('♥  Guardado En favoritos')
    });

});