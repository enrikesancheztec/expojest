import { useRouter } from "expo-router";

const useListarPersonas = () => {
    const router = useRouter();
    
    function abrirCrearPersona() {
        router.replace("/crearPersona");
    }

    return { abrirCrearPersona }
}

export default useListarPersonas;