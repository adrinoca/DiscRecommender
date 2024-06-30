'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../ui/globals.css"; // Importar estilos globales.

export default function Albums() {
  const [albums, setAlbums] = useState([]); // Estado para almacenar los álbumes.
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Álbum seleccionado para dejar una puntuación.
  const [rating, setRating] = useState(0); // Puntuación actual del usuario.
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto o cerrado.

  useEffect(() => {
    const storedAlbums = sessionStorage.getItem('albums'); // Obtener los álbumes almacenados en sessionStorage.
    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums)); // Convertir la cadena JSON en un objeto y actualizar el estado.
    }
  }, []); // El array vacío indica que este efecto solo debe ejecutarse una vez al montar el componente.

  // Función para abrir el modal y seleccionar un álbum para dejar una puntuación.
  const openModal = (album) => {
    setSelectedAlbum(album); // Establecer el álbum seleccionado.
    setRating(0); // Restablecer la puntuación a 0.
    setIsModalOpen(true); // Abrir el modal.
  };

  // Función para cerrar el modal y limpiar los estados relacionados.
  const closeModal = () => {
    setSelectedAlbum(null); // Limpiar el álbum seleccionado.
    setRating(0); // Restablecer la puntuación a 0.
    setIsModalOpen(false); // Cerrar el modal.
  };

  // Función para manejar el envío de la puntuación.
  const handleRatingSubmit = async () => {
    if (selectedAlbum && rating > 0) {
      try {
        // Envía una solicitud POST al backend con el ID del álbum y la puntuación.
        const response = await axios.post('/api/submit-rating', {
          albumId: selectedAlbum.id,
          rating: rating,
        });
        console.log(response);
        if (response.status === 201) {
          alert('Rating added successfully!');
          closeModal();
        } else {
          alert('Failed to add rating');
        }
      } catch (error) {
        console.error('Error:', error); // Mostrar error en la consola si la solicitud falla.
        alert('Error adding rating');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-12 text-black">Your Selected Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {albums.map((album, index) => {
          const imageUrl = album.image.find(img => img.size === 'extralarge')['#text']; // Obtener la URL de la imagen grande del álbum.
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-200 transition-transform transform hover:scale-105">
              <img src={imageUrl} alt={album.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-black mb-2">{album.name}</h2>
              <p className="text-lg text-gray-500 mb-4">{album.artist.name}</p>
              <div className="flex justify-around">
                <a href={album.url} target="_blank" className="text-gray-600 hover:text-black underline">
                  Listen on Last.fm
                </a>
                <button onClick={() => openModal(album)} className="text-gray-600 hover:text-black underline">
                  Rate Album
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Rate {selectedAlbum?.name}</h2>
            <div className="flex items-center justify-between mb-4">
              <label className="mr-2">Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))} // Actualizar la puntuación cuando el usuario la cambia.
                className="border border-gray-300 p-2 rounded-lg w-24 text-center"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleRatingSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
