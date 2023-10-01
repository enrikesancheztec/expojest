import React from 'react';
import { ListItem, Button, Text } from "@react-native-material/core";
import useListarPersonas from "../hooks/useListarPersonas";

let funcionAbrirCrearPersona = null;

const screenOptions = {
    title: "Listar Personas",
    headerRight: () => (
        <Button accessibilityLabel="crearPersona" variant="text" title="+" color="primary" onTouchEnd={funcionAbrirCrearPersona} />
    ),
};

const ListarPersonas = () => {
    const { personas, abrirCrearPersona } = useListarPersonas();
    funcionAbrirCrearPersona = abrirCrearPersona;
  
    let listaPersonas = [];

    if (personas !== undefined) {
        personas.forEach((persona, index) => {
            listaPersonas.push(<ListItem key={persona.id} title={persona.nombre + " " + persona.apellido} />);
        });    
    }

    return (
        <>
            <Button accessibilityLabel="crearPersona" variant="text" title="+" color="primary" onTouchEnd={funcionAbrirCrearPersona} />
            {listaPersonas}
        </>
    )
}
export default ListarPersonas;