import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { eventImages } from '../data/eventData';

export const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(eventImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % eventImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(eventImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + eventImages.length) % eventImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(eventImages[prevIndex]);
  };

  return (
    <div className="container mx-auto px-6 mb-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Event Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventImages.map((image, index) => (
          <div 
            key={image.id}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.url} 
              alt={image.caption}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">{image.caption}</p>
                <p className="text-blue-200 text-sm">Click to view full size</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-6 left-6 text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-xl font-bold">{selectedImage.caption}</p>
              <p className="text-blue-200">{currentImageIndex + 1} of {eventImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};