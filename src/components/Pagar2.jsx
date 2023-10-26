import React, { useState } from 'react';
import './pagar2.css';

function Pagar2() {
  const [selectedPayment, setSelectedPayment] = useState(""); // Estado para rastrear la opción de pago seleccionada
  const [cuponInputVisible, setCuponInputVisible] = useState(false); // Estado para rastrear la visibilidad del campo de cupón
  const [cuponCode, setCuponCode] = useState(""); // Estado para rastrear el código de cupón ingresado

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const toggleCuponInput = () => {
    setCuponInputVisible(!cuponInputVisible);
  };

  const handleCuponCodeChange = (event) => {
    setCuponCode(event.target.value);
  };

  return (
    <div className="row pagar m-3 shadow p-1 rounded">
      <p className="fw-bold text-light">Seleccione un método de pago</p>
      <hr />
      <div className="col-auto m-2 box">
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            name="payment"
            value="WebPay"
            checked={selectedPayment === "WebPay"}
            onChange={handlePaymentChange}
          />
          <img
            src="/webpay.svg"
            alt="WebPay Logo"
            className="imagen-webpay"
          />
        </label>
      </div>
      <div className="col-auto m-2 box">
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            name="payment"
            value="PayPal"
            checked={selectedPayment === "PayPal"}
            onChange={handlePaymentChange}
          />
          <img
            src="/PayPal.svg"
            alt="PayPal Logo"
            className="imagen-webpay"
          />
        </label>
      </div>
      <hr />
      <p className="text-light">
        ¿Tienes cupón de descuento?{" "}
        <span
          className="cupon-link"
          onClick={toggleCuponInput}
          style={{
            color: "#01374E",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Ingrésalo Aquí
        </span>
      </p>
      <div className="mt-2"> {/* Espacio de separación */}
        {cuponInputVisible && (
          <div className="cupon-input">
            <input
              type="text"
              placeholder="Ingresa tu código de cupón"
              value={cuponCode}
              onChange={handleCuponCodeChange}
            />
            <button
              onClick={toggleCuponInput}
              style={{ backgroundColor: "#FB8500", color: "#fff", borderRadius: "5px" }}
            >
              Guardar
            </button>
          </div>
        )}
      </div>
      {selectedPayment && (
        <p className="text-light mt-2">Opción de pago seleccionada: {selectedPayment}</p>
      )}
    </div>
  );
}

export default Pagar2;
