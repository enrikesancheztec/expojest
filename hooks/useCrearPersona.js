import {useState}  from 'react';
import { useRouter } from "expo-router";

const useNombre = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const router = useRouter();
    
    function guardaPersonaCreada() {
        router.replace("/listarPersonas");
    }

    return { nombre, setNombre, apellido, setApellido, guardaPersonaCreada }
}

export default useNombre;