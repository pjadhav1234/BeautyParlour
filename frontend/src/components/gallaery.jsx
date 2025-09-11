import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';
import g11 from '../assets/g11.jpg';
import g12 from '../assets/g12.jpg';
import g13 from '../assets/g13.jpg';
import g14 from '../assets/g14.jpg';
import g15 from '../assets/g15.jpg';
import g16 from '../assets/g16.jpg';
import g17 from '../assets/g17.jpg';

const CircularImageGallery = () => {
  // Sample image URLs (you can replace with your own images)
  const sampleImages = [
    g1, g5,g10,g15,g9,g2, g6,g3, g9,g14,g4,g8, g9, g10,  g5,g17, g6,g9, g7, g14,g1, g15, g8,g16
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container-fluid py-5 bg-light min-vh-100 d-flex align-items-center justify-content-center">
      {/* Custom CSS Styles */}
      <style jsx>{`
        .circular-gallery {
          width: 600px;
          height: 600px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          border: 8px solid white;
          background: #f8f9fa;
        }
        
        .image-container {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 2px;
          padding: 10px;
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.5);
        }
        
        .gallery-image:hover {
          transform: scale(1.05);
          z-index: 10;
          position: relative;
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
          border: 2px solid #007bff;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        
        .modal-image {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        
        .close-btn {
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;
          z-index: 1051;
          background: rgba(0,0,0,0.5);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          transition: background 0.3s ease;
        }
        
        .close-btn:hover {
          background: rgba(255,0,0,0.7);
        }
        
        .gallery-title {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        
        @media (max-width: 768px) {
          .circular-gallery {
            width: 90vw;
            height: 90vw;
            max-width: 500px;
            max-height: 500px;
          }
          
          .image-container {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 1px;
            padding: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .circular-gallery {
            width: 95vw;
            height: 95vw;
            max-width: 400px;
            max-height: 400px;
          }
          
          .image-container {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(6, 1fr);
          }
        }
      `}</style>

      <div className="text-center">
        <div className="gallery-title">
          <h1 className="display-4 fw-bold text-primary mb-2">Our Gallery</h1>
            <p className="lead text-secondary">A glimpse into our beautiful moments</p>
        </div>

        <div className="circular-gallery mx-auto">
          <div className="image-container">
            {sampleImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="close-btn"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CircularImageGallery;