import React from 'react';
import { ListItem, IconButton } from "@react-native-material/core";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from "expo-router";
import useListarPersonas from "../hooks/useListarPersonas";

let funcionAbrirCrearPersona = null;

const screenOptions = {
    title: "Listar Personas",
    headerRight: () => (
        <IconButton onTouchEnd={funcionAbrirCrearPersona} 
            icon={props => <Ionicons name='add-outline' size={32} />}
       />
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
            <Stack.Screen options={screenOptions} />

            {listaPersonas}
        </>
    )
}
export default ListarPersonas;