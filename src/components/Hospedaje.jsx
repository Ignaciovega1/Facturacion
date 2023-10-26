import React from 'react';
import './hospedaje.css';

function Hospedaje({ objeto }) { // Cambiamos props a objeto
    const infoPaquete = objeto.info_paquete;

    return (
        <div className="row hospedaje m-3 shadow rounded">
            <div className="flex">
                <i className="bi bi-ticket-detailed plane"></i>
                <p className="fw-bold text-light">Detalle de hospedaje</p>
            </div>
            <hr />
            <p className="text-light">Nombre de la Habitación: {infoPaquete.nombre_opcion_hotel}</p>
            <p className="text-light">Descripción de la Habitación: {infoPaquete.descripcion_habitacion}</p>
            <p className="text-light">Servicios de la Habitación: {infoPaquete.servicios_habitacion}</p>
            <p className="text-light">Precio por Noche: {infoPaquete.precio_noche}</p>
            <p className="text-light">Nombre del Hotel: {infoPaquete.hotel_info.nombre}</p>
            <p className="text-light">Descripción del Hotel: {infoPaquete.hotel_info.descripcion_hotel}</p>
            <p className="text-light">Servicios del Hotel: {infoPaquete.hotel_info.servicios_hotel}</p>
        </div>
    );
}


//<div className="mb-3 pasajero-container">
 //               <div className="mb-1">
 //                   <label htmlFor="nombres" className="form-label text-light">
  //                      Nombres
  //                  </label>
   //                 <input type="text" className="form-control tamano" id="nombres" />
    //            </div>
export default Hospedaje;
