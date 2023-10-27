import React from 'react';
import './Compra.css';

function Compra({ objeto }) { // Cambiamos props a objeto
    const vueloInfo = objeto.vuelo_info;

    return (
        <div className="row compra m-3 shadow rounded">
            <div className="flex">
                <i className="bi bi-ticket-detailed plane"></i>
                <p className="fw-bold text-light">Detalle de la compra</p>
            </div>
            <hr />
            <p className="text-secondary fs-6 mb-0">Ciudad de Inicio</p> 
            <p className="text-light fs-3">{vueloInfo.ciudad_inicio}</p>
            <p className="text-dark fs-6 mb-0">Ciudad de Fin</p> 
            <p className="text-light fs-3">{vueloInfo.ciudad_fin}</p>
            <p className="text-dark fs-6 mb-0">Tipo de Vuelo</p> 
            <p className="text-light fs-3">{vueloInfo.tipo_vuelo}</p>
            <p className="text-light fs-6 mb-0">Ida</p> 
            <p className="text-light fs-6">{vueloInfo.fecha_ida}</p>
            <p className="text-light fs-6 mb-0">Vuelta</p> 
            <p className="text-light fs-6">{vueloInfo.fecha_vuelta}</p>
            <p className="text-light fs-6">Hora de Ida: {vueloInfo.hora_ida}</p>
            <p className="text-light fs-6">Hora de Fin: {vueloInfo.hora_fin}</p>
            <p className="text-light">Escalas: {vueloInfo.escalas}</p>
        </div>
    );
}

export default Compra;
