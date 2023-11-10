import React, { useState } from 'react';
import Reg from "./Registrarse"

function Inicio(){

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para procesar el formulario
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Contraseña:', contrasena);
      // Puedes enviar los datos al servidor o realizar otras acciones aquí
    };

    return(
        <>
            <p>Inicio</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <label htmlFor="correo">Correo Electrónico:</label>
            <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            />

            <label htmlFor="contrasena">Contraseña:</label>
            <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            />

            <button type="submit">Registrar</button>
            </form>
        </>
    )

}

export default Inicio;