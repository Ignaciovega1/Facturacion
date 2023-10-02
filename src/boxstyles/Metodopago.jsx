import React from 'react'
import Webpay from './imagenes/Webpay.png'
import Tarjeta from './imagenes/Tarjeta.png'

const Metodopago = () => {
  return (
    <div className="metodopago-box">
      <div className="texto-con-trazo">
        <h3>¿Con qué desea pagar?</h3>
        <hr />
      </div>
      <div className="subcontenedor-box">
        <button type="button" className="btn btn-primary">
          <img src={Webpay} alt="Webpay" width={50} height={50} />
        </button>

        <button type="button" class="btn btn-primary">
            <img src={Tarjeta} width={50} height={50} alt="Tarjeta" />
        </button>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
};

export default Metodopago;