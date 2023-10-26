import { useState } from 'react'
//import './App.css'
import Compra from './components/Compra'
import Hospedaje from './components/Hospedaje'
import Pasajero from './components/Pasajero'
import Servicio from './components/Servicio'
import TotalPago from './components/TotalPago'
import Pagar2 from './components/Pagar2'
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import reservaMock from './mocks/reserva'
import NavBar from './components/NavBar'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App() {

  const handleBuscarClick = async () => {
    console.log(reservaMock);
  }

  const BotonRedireccionExterna = () => {
    window.location.href = "http://localhost:8080"
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    crearPDF()

    const formData = {
      orden_id: '345ab',
      session_id: '1234',
      Monto: costoTotal,
      url_retorno: 'http://localhost:3000/'
    };
  
    try {
      const response = await fetch('http://localhost:8080/save-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Maneja la respuesta exitosa, si es necesario
        console.log('Transacción guardada con éxito');
      } else {
        // Maneja errores
        console.error('Error al guardar la transacción');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };
  
  function crearPDF() {
    const doc = new jsPDF();
  
    const img = new Image();
    img.src = '/public/logo.png';
  
    img.onload = function() {
      doc.addImage(img, 'PNG', 10, 10, 50, 50); 
  
      doc.setDrawColor(2, 48, 71);
      doc.line(65, 10, 65, 60);
  
      doc.setTextColor(2, 48, 71);
      doc.text('Agencia de Viajes', 70, 20); 
      doc.setTextColor(2, 48, 71);
      doc.text('Utem Travels Ltda', 70, 30); 
  
      doc.save('DetallesReserva.pdf');
    };
  }
  

  // Calcula el costo total del vuelo
  const costoVuelo = reservaMock.precio_viaje;

  // Calcula el costo total de la estancia en el hotel
  const fechaIda = new Date(reservaMock.vuelo_info.fecha_ida);
  const fechaVuelta = new Date(reservaMock.vuelo_info.fecha_vuelta);
  const numeroDias = (fechaVuelta - fechaIda) / (1000 * 60 * 60 * 24); // Calcula el número de días
  const precioNoche = reservaMock.info_paquete.precio_noche;
  const costoEstanciaHotel = precioNoche * numeroDias;

  // Calcula el costo total
  const costoTotal = costoVuelo + costoEstanciaHotel;

  //console.log(formData)




  return (
    <>
      <NavBar></NavBar>
      <div className="container">

        <div className="row">
          <div className="col-md-6 left">
            <Pagar2></Pagar2>
            <Pasajero></Pasajero>


          </div>
          <div className="col-md-6 rigth">
            <TotalPago costoTotal={costoTotal} />
            <Compra objeto={reservaMock} />
            <Servicio></Servicio>
            <Hospedaje objeto={reservaMock} />

            <div className="m-3">

              <Button className="buscar" variant="warning" onClick={handleSubmit}>
                CONFIRMAR DATOS INGRESADOS
              </Button>
              <Button className="redireccionar" variant="warning" onClick={BotonRedireccionExterna}>
                Ir a pagar
              </Button>

            </div>



          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
