import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data";

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const events = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.event))),
  ];

  const filteredImages =
    selectedEvent === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.event === selectedEvent);

  const openLightbox = (index: number) => {
    const imageIndex = galleryImages.findIndex(
      (img) => img.id === filteredImages[index].id
    );
    setLightboxImage(imageIndex);
  };

  const closeLightbox = () => setLightboxImage(null);

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        (lightboxImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments of innovation, learning, and celebration
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {events.map((event) => (
              <button
                key={event}
                onClick={() => setSelectedEvent(event)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedEvent === event
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {event}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold text-sm">{image.event}</p>
                  <p className="text-xs">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No images found for this event.
            </p>
          </div>
        )}

        <AnimatePresence>
          {lightboxImage !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50"
                onClick={closeLightbox}
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="max-w-5xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={galleryImages[lightboxImage].url}
                    alt={galleryImages[lightboxImage].caption}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="text-white text-center mt-4">
                    <p className="font-semibold">
                      {galleryImages[lightboxImage].event}
                    </p>
                    <p className="text-sm text-gray-300">
                      {galleryImages[lightboxImage].caption}
                    </p>
                  </div>
                </motion.div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
