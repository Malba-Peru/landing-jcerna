import React, { useState } from "react";

const GalleryModal = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    );
  };

  const goToNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div>
      {/* Galería de imágenes */}
      <div className="container">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* Modal para mostrar la imagen seleccionada */}
      {selectedIndex !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          {/* Contenedor de la imagen y las flechas */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic en la imagen o flechas
          >
            {/* Flecha izquierda */}
            <div
              style={{
                position: "absolute",
                left: "10px",
                cursor: "pointer",
                color: "white",
                fontSize: "2em",
                zIndex: 1001,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              &#10094; {/* Icono de flecha izquierda */}
            </div>

            {/* Imagen seleccionada */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
                border: "3px solid white",
              }}
            />

            {/* Flecha derecha */}
            <div
              style={{
                position: "absolute",
                right: "10px",
                cursor: "pointer",
                color: "white",
                fontSize: "2em",
                zIndex: 1001,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              &#10095; {/* Icono de flecha derecha */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
