import React, { useState } from 'react';
import '../App.css';


const Detallepasajero = () => {
  const [nombreApellido, setNombreApellido] = useState('');
  const [rut, setRut] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreApellidoChange = (e) => {
    setNombreApellido(e.target.value);
  };

  const handleRutChange = (e) => {
    setRut(e.target.value);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  return (
    <div className="Detallepasajero-box">
      <div className="texto-izquierda">
        <div className="texto-con-trazo">
          <h3>Detalle del Pasajero</h3>
          <hr/>
        </div>
        <div>
          <label>
            Nombre y Apellido:
            <input
              type="text"
              value={nombreApellido}
              onChange={handleNombreApellidoChange}
              placeholder="Ej. Juan Pérez"
            />
          </label>
        </div>
        <div>
          <label>
            <br/>
            Rut:
            <input
              type="text"
              value={rut}
              onChange={handleRutChange}
              placeholder="Ej. 12.345.678-9"
            />
          </label>
        </div>
        <div>
          <label>
            <br/>
            Dirección:
            <input
              type="text"
              value={direccion}
              onChange={handleDireccionChange}
              placeholder="Ej. Av. Principal 123"
            />
          </label>
        </div>
        <div>
          <label>
            <br/>
            Correo Electrónico:
            <input
              type="email"
              value={correo}
              onChange={handleCorreoChange}
              placeholder="ejemplo@correo.com"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Detallepasajero;