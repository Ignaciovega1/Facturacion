import React, { useState } from 'react';
import '../App.css';


const Datostarjeta = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvv, setCVV] = useState('');

  const handleNumeroTarjetaChange = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  const handleFechaVencimientoChange = (e) => {
    setFechaVencimiento(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  return (
    <div className="Datostarjeta-box">
      <div className="texto-izquierda">
        <div className="texto-con-trazo">
          <h3>Ingrese datos de tarjeta</h3>
          <hr/>
        </div>
        <div>
          <label>
            Número de tarjeta:
            <input
              type="text"
              value={numeroTarjeta}
              onChange={handleNumeroTarjetaChange}
              placeholder="1234 5678 9101 1121"
            />
          </label>
        </div>
        <div>
          <label>
            <br/>
            Fecha de vencimiento:
            <input
              type="text"
              value={fechaVencimiento}
              onChange={handleFechaVencimientoChange}
              placeholder="MM/AA"
            />
          </label>
        </div>
        <div>
          <label>
            <br/>
            CVV:
            <br/>
            <input
              type="text"
              value={cvv}
              onChange={handleCVVChange}
              placeholder="123"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Datostarjeta;