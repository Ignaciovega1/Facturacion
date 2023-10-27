import React from 'react';
import jsPDF from 'jspdf';

const ModalComponent = () => {

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

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ maxHeight: "80vh" }}> {/* Ajusta el valor maxHeight según tus necesidades */}
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Título del modal</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Contenido...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={crearPDF}>Descargar documento PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;