import React, { useState } from "react";

const GalleryModal = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () =>
    setSelectedIndex((i) => (i > 0 ? i - 1 : images.length - 1));

  const goToNext = () =>
    setSelectedIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  const getModalImageStyle = () => {
    const width = window.innerWidth;

    if (width < 600) {
      return {
        width: "95vw",
        height: "50vh",
        objectFit: "cover",
        borderRadius: "10px",
        border: "3px solid white",
      };
    } else if (width < 1024) {
      return {
        width: "85vw",
        height: "70vh",
        objectFit: "cover",
        borderRadius: "10px",
        border: "3px solid white",
      };
    } else {
      return {
        width: "70vw",
        height: "80vh",
        objectFit: "cover",
        borderRadius: "10px",
        border: "3px solid white",
      };
    }
  };

  return (
    <div>
      {/* GALERÍA */}
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

      {/* MODAL */}
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
          onClick={closeModal}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            onClick={(e) => e.stopPropagation()}>
            {/* IZQUIERDA */}
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
              }}>
              &#10094;
            </div>

            {/* IMAGEN RESPONSIVE */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              style={getModalImageStyle()}
            />

            {/* DERECHA */}
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
              }}>
              &#10095;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
