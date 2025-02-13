import { useState, useEffect } from 'react';
import axios from 'axios';

const Contenido = () => {
  const [celularesSeleccionados, setCelularesSeleccionados] = useState([null, null, null, null]);
  const [searchTerm, setSearchTerm] = useState('');
  const [celulares, setCelulares] = useState([]); // Guardamos los celulares completos
  const [filteredCelulares, setFilteredCelulares] = useState([]); // Guardamos los celulares filtrados
  const [celularIndexSeleccionado, setCelularIndexSeleccionado] = useState(null);

  useEffect(() => {
    // Solicitud al back-end para obtener los celulares
    axios.get('https://back-cel.onrender.com/api/celulares')
      .then((response) => {
        setCelulares(response.data); // Guardamos todos los celulares
        setFilteredCelulares(response.data); // Inicializamos los celulares filtrados
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los celulares:', error);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filtrar celulares basados en el término de búsqueda
    const filtered = celulares.filter((celular) =>
      celular.marca.toLowerCase().includes(term.toLowerCase()) ||
      celular.modelo.toLowerCase().includes(term.toLowerCase()) // Filtrar por marca o modelo
    );

    setFilteredCelulares(filtered); // Actualizamos los celulares filtrados
  };

  const handleSelectCelular = (index, celularId) => {
    const updatedCelulares = [...celularesSeleccionados];
    updatedCelulares[index] = celularId;
    setCelularesSeleccionados(updatedCelulares);
    setSearchTerm(''); // Limpiar la barra de búsqueda después de la selección
  };

  const handleEliminarCelular = (index) => {
    const updatedCelulares = [...celularesSeleccionados];
    updatedCelulares[index] = null; // Eliminar el celular seleccionado
    setCelularesSeleccionados(updatedCelulares);
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-[#BFBBAF] p-5 sm:p-6 md:p-20 mb-0">
      <div className="bg-[#555A54] p-8 sm:p-10 md:p-12 rounded-xl shadow-xl w-full max-w-full flex flex-col gap-6 mb-9">
        <div className="text-white text-center mb-9">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Selecciona o cambia celulares para comparar</h2>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            {[0, 1, 2 ].map((index) => (
              <button
                key={index}
                onClick={() => setCelularIndexSeleccionado(index)}
                className={`py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 ${
                  celularIndexSeleccionado === index
                    ? 'bg-[#4CAF50] text-white'
                    : 'bg-white text-[#555A54] border-2 border-[#4CAF50]'
                }`}
              >
                Celular {index + 1}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar celular..."
            className="py-3 px-4 rounded-md shadow-md bg-white text-black border-2 border-[#4CAF50] w-64"
          />
          {searchTerm && (
           <div className="bg-white text-black rounded-lg shadow-lg mt-2 w-80 h-48 max-h-60 overflow-y-auto flex flex-col-reverse mx-auto">        
              {filteredCelulares.map((celular) => (
                <div
                  key={celular.id}
                  className="py-2 px-4 hover:bg-[#4CAF50] hover:text-white cursor-pointer"
                  onClick={() => celularIndexSeleccionado !== null && handleSelectCelular(celularIndexSeleccionado, celular.id)}
                >
                  {celular.marca} {celular.modelo} {/* Mostrar marca y modelo */}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-6 justify-center flex-wrap">
          {celularesSeleccionados.map((celularId, index) =>
            celularId ? (
              <div key={index} className="flex justify-center mb-5">
                {celulares
                  .filter((cel) => cel.id === celularId)
                  .map((celular) => (
                    <div
                      className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full sm:w-72 text-black"
                      key={celular.id}
                    >
                      <h3 className="text-lg font-bold mb-2">{celular.marca} {celular.modelo}</h3> {/* Nombre */}
                      <img
                        src={celular.imagen_url} 
                        alt={celular.marca}
                        className="w-64 h-64 object-contain mb-4 rounded-lg"
                      />
                      <ul className="text-sm leading-6">
                      <li><strong>Marca:</strong> {celular.marca}</li>
                      <li><strong>Modelo:</strong> {celular.modelo}</li>
                      <li><strong>Línea:</strong> {celular.linea}</li>
                      <li><strong>Fecha de lanzamiento:</strong> {celular.anio_lanzamiento}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Dimensiones y diseño</p>
                      <li><strong>Dimensiones:</strong> {celular.altura} x {celular.ancho} x {celular.espesor} mm</li>
                      <li><strong>Peso:</strong> {celular.peso} gramos</li>
                      <li><strong>Material del cuerpo:</strong> {celular.material_cuerpo}</li>
                      <li><strong>Colores disponibles:</strong> {celular.colores_disponibles}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Pantalla</p>
                      <li><strong>Pantalla:</strong> {celular.tipo_pantalla} de {celular.tamano_pantalla}"</li>
                      <li><strong>Resolución:</strong> {celular.resolucion} ({celular.densidad_pixeles} ppi)</li>
                      <li><strong>Tasa de refresco:</strong> {celular.tasa_refresco} Hz</li>
                      <li><strong>Protección:</strong> {celular.proteccion}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Rendimiento</p>
                      <li><strong>Procesador:</strong> {celular.procesador} ({celular.nucleos_procesador} núcleos, {celular.frecuencia_procesador} GHz)</li>
                      <li><strong>GPU:</strong> {celular.gpu}</li>
                      <li><strong>Memoria RAM:</strong> {celular.memoria_ram} GB</li>
                      <li><strong>Almacenamiento:</strong> {celular.almacenamiento} GB</li>
                      <li><strong>Ranura SD:</strong> {celular.ranura_sd ? 'Sí' : 'No'}</li>
                      <p className="text-lg font-semibold text-red-700 text-center"> Sistema operativo</p>
                      <li><strong>Sistema operativo:</strong> {celular.sistema_operativo} {celular.version_so}</li>
                      <li><strong>Actualizaciones garantizadas:</strong> {celular.actualizaciones_garantizadas} años</li>
                      <p className="text-lg font-semibold text-red-700 text-center"> Cámaras</p>
                      <li><strong>Cámaras traseras:</strong> {celular.num_camaras_traseras} ({celular.resolucion_camara_principal} MP, {celular.apertura_camara_principal})</li>
                      <li><strong>Lentes adicionales:</strong> {celular.lentes_adicionales}</li>
                      <li><strong>Zoom:</strong> {celular.zoom_optico}x óptico, {celular.zoom_digital}x digital</li>
                      <li><strong>Estabilización:</strong> {celular.estabilizacion}</li>
                      <li><strong>Grabación video trasera:</strong> {celular.grabacion_video_trasera}</li>
                      <li><strong>Cámara frontal:</strong> {celular.resolucion_camara_frontal} MP ({celular.apertura_camara_frontal})</li>
                      <li><strong>Grabación video frontal:</strong> {celular.grabacion_video_frontal}</li>
                      <p className="text-lg font-semibold text-red-700 text-center"> Batería</p>
                      <li><strong>Batería:</strong> {celular.capacidad_bateria} mAh</li>
                      <li><strong>Carga rápida:</strong> {celular.carga_rapida} W</li>
                      <li><strong>Carga inalámbrica:</strong> {celular.carga_inalambrica} W</li>
                      <li><strong>Autonomía estimada:</strong> {celular.autonomia_estimada} horas</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Conectividad</p>
                      <li><strong>Red móvil:</strong> {celular.red_movil}</li>
                      <li><strong>Wi-Fi:</strong> {celular.wifi}</li>
                      <li><strong>Bluetooth:</strong> {celular.bluetooth}</li>
                      <li><strong>NFC:</strong> {celular.nfc ? 'Sí' : 'No'}</li>
                      <li><strong>USB:</strong> {celular.usb}</li>
                      <li><strong>GPS:</strong> {celular.gps}</li>
                      <li><strong>Jack 3.5mm:</strong> {celular.jack_35 ? 'Sí' : 'No'}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Audio</p>
                      <li><strong>Altavoces estéreo:</strong> {celular.altavoces_estereo ? 'Sí' : 'No'}</li>
                      <li><strong>Certificación de sonido:</strong> {celular.certificacion_sonido}</li>
                      <li><strong>Microfonos:</strong> {celular.microfonos}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Sensores</p>
                      <li><strong>Sensor de huellas:</strong> {celular.sensor_huellas}</li>
                      <li><strong>Reconocimiento facial:</strong> {celular.reconocimiento_facial ? 'Sí' : 'No'}</li>
                      <li><strong>Sensores:</strong> {celular.acelerometro ? 'Acelerómetro, ' : ''}{celular.giroscopio ? 'Giroscopio, ' : ''}{celular.brujula ? 'Brújula, ' : ''}{celular.barometro ? 'Barómetro' : ''}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Resistencia</p>
                      <li><strong>Certificación IP:</strong> {celular.certificacion_ip}</li>
                      <li><strong>Resistencia a caídas:</strong> {celular.resistencia_caidas ? 'Sí' : 'No'}</li>
                      <p className="text-lg font-semibold text-red-700 text-center">Precio</p>
                      <li><strong>Precio de lanzamiento:</strong> ${celular.precio_lanzamiento}</li>
                      <li><strong>Precio actual:</strong> ${celular.precio_actual}</li>
                    </ul>
                      <button
                        onClick={() => handleEliminarCelular(index)}
                        className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-700"
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Contenido;
