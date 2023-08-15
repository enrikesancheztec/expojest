import React from 'react';
import { TextInput, Stack, Button, Text } from "@react-native-material/core";
import useNombre from './useNombre';

const Home = () => {
    const { calculaNombreCompleto, nombre, setNombre, apellido, setApellido, nombreCompleto } = useNombre('');

    return (
        <Stack spacing={2} style={{ margin: 16 }}>
            <TextInput
                style={{ height: 40 }}
                label="Nombre" variant="standard"
                onChangeText={(text) => setNombre(text)}
                value={nombre}
            />
            <TextInput
                placeholder="Escribe aqui tu apellido"
                onChangeText={(text) => setApellido(text)}
                value={apellido}
                label="Apellido" variant="standard"
            />
            <Button title="Obtener Nombre Completo" onTouchEnd={calculaNombreCompleto} />
            <Text style={{ margin: 16 }}>
                {nombreCompleto}
            </Text>
        </Stack>
    )
}
export default Home;