import {useState}  from 'react';
import utileriasNombre from './utileriasNombre';

const useNombre = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const { concatenaNombreCompleto } = utileriasNombre();
    
    function calculaNombreCompleto() {
        var nuevoNombreCompleto = concatenaNombreCompleto(nombre, apellido);
        setNombreCompleto(nuevoNombreCompleto);
    }

    return { nombre, setNombre, apellido, setApellido, nombreCompleto, calculaNombreCompleto }
}

export default useNombre;