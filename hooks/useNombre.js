import {useState}  from 'react';
import utileriasNombre from '../utils/utileriasNombre';

const useNombre = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const { concatenaNombreCompleto } = utileriasNombre();
    
    function calculaNombreCompleto() {
        let nuevoNombreCompleto = concatenaNombreCompleto(nombre, apellido);
        setNombreCompleto(nuevoNombreCompleto);
    }

    return { nombre, setNombre, apellido, setApellido, nombreCompleto, calculaNombreCompleto }
}

export default useNombre;