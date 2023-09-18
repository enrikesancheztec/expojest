import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import PersonasAPI from "../apis/personasApi";

const useListarPersonas = () => {
    const router = useRouter();
    const [personas, setPersonas] = useState([]);
    const { getTodasPersonas } = PersonasAPI();
    
    function abrirCrearPersona() {
        router.replace("/crearPersona");
    }

    async function obtenerListarPersonas() {
        const response = await getTodasPersonas();

        if (response !== null) {
            setPersonas(response.data);
        }
    }

    useEffect(() => {
        obtenerListarPersonas();
    }, []);

    return { abrirCrearPersona, personas }
}

export default useListarPersonas;