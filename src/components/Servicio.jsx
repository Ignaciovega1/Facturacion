import React, { useState } from 'react';
import './servicio.css';

const buttonStyle = {
  backgroundColor: '#13729B',
  color: 'white',
};

function Servicio() {
  const [selectedServices, setSelectedServices] = useState([]); // Estado para rastrear los servicios seleccionados

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((selected) => selected !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="row servicio m-3 shadow rounded">
      <div className="flex">
        <i className="bi bi-ticket-detailed plane"></i>
        <p className="fw-bold text-light">Servicios seleccionados</p>
      </div>
      <hr />
      <div>
        <label className="text-light">Selecciona los servicios adicionales:</label>
        <div className="btn-group">
          <button
            type="button"
            className={`btn ${selectedServices.includes("Agrega más equipaje") ? 'btn-primary' : 'btn-light'}`}
            style={buttonStyle} // Aplicamos el estilo personalizado
            onClick={() => toggleService("Agrega más equipaje")}
          >
            Agrega más equipaje
          </button>
          <button
            type="button"
            className={`btn ${selectedServices.includes("Contratar seguros de vida") ? 'btn-primary' : 'btn-light'}`}
            style={buttonStyle} // Aplicamos el estilo personalizado
            onClick={() => toggleService("Contratar seguros de vida")}
          >
            Contratar seguros de vida
          </button>
          <button
            type="button"
            className={`btn ${selectedServices.includes("Embarque de auto") ? 'btn-primary' : 'btn-light'}`}
            style={buttonStyle} // Aplicamos el estilo personalizado
            onClick={() => toggleService("Embarque de auto")}
          >
            Embarque de auto
          </button>
        </div>
      </div>
      <div className="text-light mt-2">
        {selectedServices.length > 0 ? `Servicios seleccionados: ${selectedServices.join(", ")}` : "Servicios seleccionados: Ninguno"}
      </div>
    </div>
  );
}

export default Servicio;
