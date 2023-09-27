import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarPersonas from "../app/listarPersonas";
import CrearPersona from "../app/crearPersona";
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";

const Stack = createNativeStackNavigator();

jest.mock("expo-router", () => ({
    ...jest.requireActual("expo-router"),
    useRouter: () => ({
        replace: jest.fn().mockImplementation(() => {})
    }),
}));

function ListarPersonasScreen() {
    return (
      <ListarPersonas/>
    );
}

function CrearPersonaScreen() {
    return (
      <CrearPersona/>
    );
}

describe('Pruebas de Crear Persona', () => {
    test('Dado nombre y apellido validos cuando se guarda persona la persona es agregada a la lista', async () => {
        // Given
        const primerNombre = "David";
        const apellido = new Date().getTime().toString();

        await render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="/crearPersona" component={CrearPersonaScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

        await fireEvent.changeText(screen.getByLabelText('nombre'), primerNombre)
        await fireEvent.changeText(screen.getByLabelText('apellido'), apellido)

        // When
        await fireEvent(screen.getByText('Guardar'), 'touchEnd');

        // Then
        const expectedOutput = primerNombre + " " + apellido;

        await render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="/listarPersonas" component={ListarPersonasScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

        await waitFor(() => {
            expect(screen.getByText(expectedOutput)).toBeTruthy();
        }, { timeout: 5000 });
    })
})
