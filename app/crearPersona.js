import React from 'react';
import { Stack } from "expo-router";
import { Stack as MaterialStack, TextInput, Button, Snackbar } from "@react-native-material/core";
import useCrearPersona from '../hooks/useCrearPersona';


const CrearPersona = () => {
    const { error, nombre, setNombre, apellido, setApellido, guardaPersonaCreada } = useCrearPersona();

    let snackBar = null;

    if (error) {
        snackBar = <Snackbar message="Invalid Input."/>
    }

    return (
        <MaterialStack spacing={2} style={{ margin: 16 }}>
            <Stack.Screen options={{ title: "Crear Persona" }} />
            {snackBar}
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