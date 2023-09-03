import React from 'react';
import { Stack } from "expo-router";
import { Stack as MaterialStack, TextInput, Button } from "@react-native-material/core";
import useCrearPersona from '../hooks/useCrearPersona';


const CrearPersona = () => {
    const { nombre, setNombre, apellido, setApellido, guardaPersonaCreada } = useCrearPersona();

    return (
        <MaterialStack spacing={2} style={{ margin: 16 }}>
            <Stack.Screen options={{ title: "Crear Persona" }} />
            <TextInput
                style={{ height: 40 }}
                label="Nombre" variant="standard"
                onChangeText={(text) => setNombre(text)}
                value={nombre}
                accessibilityLabel="nombre"
            />
            <TextInput
                placeholder="Escribe aqui tu apellido"
                onChangeText={(text) => setApellido(text)}
                value={apellido}
                label="Apellido" variant="standard"
                accessibilityLabel="apellido"
            />
            <Button title="Guardar" onTouchEnd={guardaPersonaCreada} />            
        </MaterialStack>
    )
}
export default CrearPersona;