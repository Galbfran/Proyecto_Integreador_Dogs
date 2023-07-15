import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Inicio from '../componentes/InicioPage/Inicio.jsx'


describe('MiComponente', () => {
    it('debe renderizar el mensaje correctamente', () => {
        render(<Inicio/>);

        const mensajeElement = screen.getByText('Nombre');
        expect(mensajeElement).toBeInTheDocument();
    });
});