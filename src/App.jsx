import React, { useState } from 'react'
import './App.css'
import DecorativeBox from './boxstyles/DecorativeBox'
import Datostarjeta from './boxstyles/Datostarjeta'
import Detallecompra from './boxstyles/Detallecompra'
import Totalvuelo from './boxstyles/totalvuelo'
import Detallepasajero from './boxstyles/Detallepasajero'
import Metodopago from './boxstyles/Metodopago'

function App() {

  return (
    <>
      <div className="app">
      <DecorativeBox /> 
      <Datostarjeta />
      <Detallecompra />
      <Totalvuelo />
      <Detallepasajero />
      <Metodopago />
      <div className="contenedor-central"></div>

      </div>
    </>
  );
}

export default App;

