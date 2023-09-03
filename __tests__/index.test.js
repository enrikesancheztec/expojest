import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import Home from "../app/index";

describe('Pruebas de Home', () => {
    test('Debe calcular el nombre completo correctamente', async () => {
        // Given
        render(<Home />)
        await fireEvent.changeText(screen.getByLabelText('nombre'), 'Jon')
        await fireEvent.changeText(screen.getByLabelText('apellido'), 'Snow')

        // When
        fireEvent(screen.getByText('Obtener Nombre Completo'), 'touchEnd');
        const expectedOutput = 'Jon Snow'

        // Then
        await waitFor(() => {
            //screen.debug();
            const actualOutput = screen.getByTestId('nombreCompleto').props.children
            expect(actualOutput).toBe(expectedOutput)
        }, { timeout: 5000 });
    })
})
