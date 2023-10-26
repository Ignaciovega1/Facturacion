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
            <p className="text-light">Ciudad de Inicio: {vueloInfo.ciudad_inicio}</p>
            <p className="text-light">Ciudad de Fin: {vueloInfo.ciudad_fin}</p>
            <p className="text-light">Tipo de Vuelo: {vueloInfo.tipo_vuelo}</p>
            <p className="text-light">Fecha de Ida: {vueloInfo.fecha_ida}</p>
            <p className="text-light">Fecha de Vuelta: {vueloInfo.fecha_vuelta}</p>
            <p className="text-light">Hora de Ida: {vueloInfo.hora_ida}</p>
            <p className="text-light">Hora de Fin: {vueloInfo.hora_fin}</p>
            <p className="text-light">Escalas: {vueloInfo.escalas}</p>
        </div>
    );
}

export default Compra;
