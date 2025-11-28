export const galleryImages = Array.from({ length: 30 }, (_, i) => ({
  src: `/images/gallery_${i + 1}.webp`,
  alt: `Imagen de galería ${i + 1}`,
}));
