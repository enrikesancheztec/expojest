import {useState}  from 'react';
import { useRouter } from "expo-router";
import { Persona } from "../model/Persona";
import PersonasAPI from "../apis/personasApi";

const useNombre = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
    const { savePersona } = PersonasAPI();
    
    async function guardaPersonaCreada() {
        setError(false);
        const persona = new Persona(0, nombre, apellido);
        const newPersona = await savePersona(persona);

        if (newPersona !== null) {
            router.replace("/listarPersonas");
        } else {
            setError(true);
        }
    }

    return { nombre, setNombre, apellido, setApellido, guardaPersonaCreada, error }
}

export default useNombre;