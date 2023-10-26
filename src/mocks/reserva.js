const reservaMock = {
    id: 1,
    nombre: "Paquete Santiago a Concepción",
    id_origen: 1,
    id_destino: 2,
    id_hh: 5,
    descripcion: "Viaje desde Santiago a Concepción",
    detalles: "Incluye vuelo y estancia en el Gran Hotel Santiago",
    precio_viaje: 350000,
    nombre_ciudad_origen: "Santiago",
    nombre_ciudad_destino: "Concepción",
    info_paquete: {
      habitacion_id: 5,
      opcion_hotel_id: 2,
      nombre_opcion_hotel: "Habitación Doble",
      descripcion_habitacion: "Habitación doble con desayuno buffet.",
      servicios_habitacion:
        "Wi-Fi, TV de pantalla plana, Desayuno buffet, Minibar",
      precio_noche: 120000,
      hotel_info: {
        id: 2,
        nombre: "Concepción Palace Hotel",
        ciudad_id: 2,
        direccion: "Av. Libertad 456",
        valoracion: 4,
        descripcion_hotel: "Un hotel céntrico en Concepción",
        servicios_hotel: "Restaurante, Bar, Servicio de Habitaciones",
        telefono: "+987654321",
        correo_electronico: "info@concepcionpalacehotel.com",
        sitio_web: "www.concepcionpalacehotel.com",
      },
    },
    vuelo_info: {
      ciudad_inicio: "Puerto Montt",
      ciudad_fin: "Santiago",
      tipo_vuelo: "Más rápido",
      fecha_ida: "2023-11-30",
      fecha_vuelta: "2023-12-12",
      hora_ida: "17:00",
      hora_fin: "22:00",
      escalas: null,
    },
  };

export default reservaMock;