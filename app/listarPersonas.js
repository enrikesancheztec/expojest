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
    const { abrirCrearPersona, theme } = useListarPersonas();
    funcionAbrirCrearPersona = abrirCrearPersona;

    return (
        <>
            <Stack.Screen options={screenOptions} />
            <ListItem
                title="Jon Snow"
            />
            <ListItem
                title="Cersei Lannister"
            />
            <ListItem
                title="Ned Stark"
            />
        </>
    )
}
export default ListarPersonas;