const utileriasNombre = () => {
    function concatenaNombreCompleto(nombre, apellido) {
        console.log(nombre + ' ' + apellido);
        return nombre + ' ' + apellido;
    }

    return { concatenaNombreCompleto }
}

export default utileriasNombre;