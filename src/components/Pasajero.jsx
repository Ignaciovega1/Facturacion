import React, { useState } from 'react';
import './pasajero.css';

function Pasajero() {
    const [pasajeroActual, setPasajeroActual] = useState(1);
    const numPasajeros = 4;

    const siguientePasajero = () => {
        if (pasajeroActual < numPasajeros) {
            setPasajeroActual(pasajeroActual + 1);
        }
    };

    const anteriorPasajero = () => {
        if (pasajeroActual > 1) {
            setPasajeroActual(pasajeroActual - 1);
        }
    };

    return (
        <div className="row pasajero m-3 p-1 shadow rounded">
            <div className="flex">
                <i className="bi bi-person-walking plane"></i>
                <p className="fw-bold text-light">Detalle de pasajero</p>
            </div>
            <hr />
            <div className="mb-3 pasajero-container">
                <div className="mb-1">
                    <label htmlFor="nombres" className="form-label text-light">
                        Nombres
                    </label>
                    <input type="text" className="form-control tamano" id="nombres" />
                </div>
                <div className="mb-1">
                    <label htmlFor="apellidos" className="form-label text-light">Apellidos</label>
                    <input type="text" className="form-control tamano" id="apellidos" />
                </div>
                <div className="mb-1">
                    <label htmlFor="rut" className="form-label text-light">RUT (ej: 20778423-k)</label>
                    <input type="text" className="form-control tamano" id="rut" />
                </div>
                <div className="mb-1">
                    <label htmlFor="correo" className="form-label text-light">Correo</label>
                    <input type="email" className="form-control tamano" id="correo" />
                </div>
                <div className="mb-1">
                    <label htmlFor="numero" className="form-label text-light">Número</label>
                    <input type="text" className="form-control tamano" id="numero" />
                </div>
            </div>
            {pasajeroActual === 1 && (
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terminosYCondiciones" style={{ cursor: 'pointer' }} />
                        <label className="form-check-label text-light" htmlFor="terminosYCondiciones">
                            Acepto términos y condiciones
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="crearCuenta" style={{ cursor: 'pointer' }} />
                        <label className="form-check-label text-light" htmlFor="crearCuenta">
                            Crear cuenta con los datos ingresados
                        </label>
                    </div>
                </div>
            )}
            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-warning" onClick={anteriorPasajero} style={{ backgroundColor: "#13729B" }}>
                            Pasajero Anterior
                        </button>
                    </div>
                    <div className="col-4 text-center">
                        <span className="text-light contador">Pasajero {pasajeroActual}</span>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-warning" onClick={siguientePasajero} style={{ backgroundColor: "#13729B" }}>
                            Siguiente Pasajero
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pasajero;
