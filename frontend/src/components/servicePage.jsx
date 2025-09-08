import React from 'react';
import Footer from './Footer';

const services = [
  {
    title: "Make-up",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Express make-up", price: "£35" },
      { name: "Daytime make-up", price: "£45" },
      { name: "Evening make-up", price: "£55" },
      { name: "Wedding make-up", price: "£65" },
      { name: "Lash extensions", price: "£40" },
    ],
  },
  {
    title: "Hair Styling",
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Shampooing", price: "£10" },
      { name: "Hair cut", price: "£35" },
      { name: "Hair styling", price: "£25" },
      { name: "Hair colouring", price: "£50" },
      { name: "Ombre", price: "£65" },
    ],
  },
  {
    title: "Nail Care",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc16f792?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Manicure", price: "£15" },
      { name: "Pedicure", price: "£25" },
      { name: "Shellac", price: "£20" },
      { name: "Nail art", price: "£30" },
    ],
  },
  {
    title: "Cosmetology",
    img: "https://images.unsplash.com/photo-1616394584738-64a6a6b7403d?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Facial cleansing", price: "£40" },
      { name: "Anti-age therapy", price: "£55" },
      { name: "Acne treatment", price: "£45" },
      { name: "Skin moisturizing", price: "£35" },
      { name: "Peeling", price: "£50" },
    ],
  },
  {
    title: "SPA Procedures",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Body massage", price: "£60" },
      { name: "Stone massage", price: "£70" },
      { name: "Chocolate wrap", price: "£55" },
      { name: "Aromatherapy", price: "£45" },
    ],
  },
];

const parallaxDividers = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1500&q=80",
    title: "Relax & Rejuvenate",
    subtitle: "Professional beauty treatments ✨"
  },
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1500&q=80",
    title: "Premium Quality",
    subtitle: "Excellence in every detail 💫"
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1500&q=80",
    title: "Your Beauty Journey",
    subtitle: "Starts here with us 🌟"
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1500&q=80",
    title: "Refresh & Renew",
    subtitle: "Transform yourself today ✨"
  }
];

const EnhancedBeautyServicesPage = () => {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: '#333',
      margin: 0,
      padding: 0,
      width: '100vw',
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(135deg, rgba(212, 165, 116, 0.8), rgba(184, 140, 92, 0.9)),
                          url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1500&q=80")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: '"Georgia", serif',
        textShadow: '3px 3px 10px rgba(0, 0, 0, 0.7)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          zIndex: 2,
          background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
          backgroundSize: '200% auto',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 300,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Beauty & Elegance
        </p>
      </div>

      {/* Service Title Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #e91e63, #ad1457, #880e4f)',
        color: 'white',
        textAlign: 'center',
        padding: '1.5rem 0',
        boxShadow: '0 4px 20px rgba(233, 30, 99, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 600,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 1,
          margin: 0
        }}>
          Services & Prices
        </h2>
      </div>

      {/* Services Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {services.map((service, idx) => (
          <React.Fragment key={idx}>
            {/* Service Block - Always image left, content right */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              alignItems: 'center',
              gap: '3rem',
              marginBottom: idx < services.length - 1 ? '3rem' : '5rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Image - Always on the left */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                gridColumn: '1'
              }}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    transition: 'all 0.6s ease',
                    filter: 'brightness(1.1) saturate(1.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.filter = 'brightness(1.2) saturate(1.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(1.1) saturate(1.2)';
                  }}
                />
              </div>

              {/* Content - Always on the right */}
              <div style={{
                padding: '2rem',
                gridColumn: window.innerWidth >= 768 ? '2' : '1'
              }}>
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontFamily: '"Georgia", serif',
                  color: '#2c3e50',
                  marginBottom: '2rem',
                  position: 'relative',
                  paddingBottom: '1rem'
                }}>
                  {service.title}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #d4a574, #b88c5c)',
                    borderRadius: '2px'
                  }}></div>
                </h3>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem 0',
                        borderBottom: i < service.items.length - 1 ? '1px solid #e0e0e0' : 'none',
                        fontSize: '1.1rem',
                        color: '#444',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(212, 165, 116, 0.1), transparent)';
                        e.currentTarget.style.paddingLeft = '1rem';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.paddingLeft = '0';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{
                        fontWeight: 500,
                        color: '#2c3e50'
                      }}>{item.name}</span>
                      <span style={{
                        fontWeight: 700,
                        color: '#d4a574',
                        fontSize: '1.2rem',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
                      }}>{item.price}</span>
                    </li>
                  ))}
                </ul>
                
               
              </div>
            </div>

            {/* Parallax Divider between services */}
            {idx < services.length - 1 && (
              <div style={{
                backgroundImage: `linear-gradient(135deg, rgba(239, 224, 207, 0.85), rgba(239, 204, 170, 0.9)),
                                  url("${parallaxDividers[idx].image}")`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '350px',
                margin: '5rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                 
                }}></div>
                
                
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default EnhancedBeautyServicesPage