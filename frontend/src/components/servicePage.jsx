import React, { useState } from 'react';
import { Star, Clock, Heart, Sparkles, ArrowRight, Phone, Calendar } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "Hair Styling & Cut",
    category: "Hair Care",
    description: "Professional hair cutting and styling services",
    longDescription: "Transform your look with our expert hair stylists who specialize in modern cuts, classic styles, and personalized hair care treatments.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
    price: "₹800 - ₹2,500",
    duration: "60-90 mins",
    rating: 4.8,
    services: [
      { name: "Basic Cut & Blow Dry", price: "₹800" },
      { name: "Premium Cut & Style", price: "₹1,500" },
      { name: "Hair Wash & Cut", price: "₹1,200" },
      { name: "Celebrity Style Cut", price: "₹2,500" }
    ]
  },
  {
    id: 2,
    title: "Facial Treatment",
    category: "Skincare",
    description: "Rejuvenating facial treatments for glowing skin",
    longDescription: "Experience our signature facial treatments designed to cleanse, exfoliate, and nourish your skin for a radiant, healthy glow.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    price: "₹1,200 - ₹3,000",
    duration: "45-75 mins",
    rating: 4.9,
    services: [
      { name: "Classic Cleansing Facial", price: "₹1,200" },
      { name: "Anti-Aging Facial", price: "₹2,200" },
      { name: "Hydrating Facial", price: "₹1,800" },
      { name: "Diamond Facial", price: "₹3,000" }
    ]
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    category: "Nail Care",
    description: "Complete nail care and beautification",
    longDescription: "Pamper your hands and feet with our luxurious manicure and pedicure services, including nail art and gel polish options.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc16f792?auto=format&fit=crop&w=800&q=80",
    price: "₹600 - ₹1,800",
    duration: "60-90 mins",
    rating: 4.7,
    services: [
      { name: "Basic Manicure", price: "₹600" },
      { name: "Gel Manicure", price: "₹1,200" },
      { name: "Basic Pedicure", price: "₹800" },
      { name: "Spa Mani-Pedi Combo", price: "₹1,800" }
    ]
  },
  {
    id: 4,
    title: "Bridal Makeup",
    category: "Special Occasions",
    description: "Complete bridal makeover for your special day",
    longDescription: "Make your wedding day perfect with our comprehensive bridal makeup package, including trial sessions and touch-ups.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    price: "₹8,000 - ₹25,000",
    duration: "2-4 hours",
    rating: 5.0,
    services: [
      { name: "Bridal Trial", price: "₹3,000" },
      { name: "Wedding Day Makeup", price: "₹15,000" },
      { name: "Reception Makeup", price: "₹8,000" },
      { name: "Complete Bridal Package", price: "₹25,000" }
    ]
  },
  {
    id: 5,
    title: "Spa Treatment",
    category: "Wellness",
    description: "Relaxing spa treatments for body and mind",
    longDescription: "Unwind and rejuvenate with our therapeutic spa treatments including massages, body wraps, and aromatherapy sessions.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    price: "₹2,000 - ₹5,000",
    duration: "60-120 mins",
    rating: 4.8,
    services: [
      { name: "Relaxing Body Massage", price: "₹2,000" },
      { name: "Hot Stone Therapy", price: "₹3,500" },
      { name: "Aromatherapy Session", price: "₹2,800" },
      { name: "Full Body Spa Package", price: "₹5,000" }
    ]
  },
  {
    id: 6,
    title: "Hair Coloring",
    category: "Hair Care",
    description: "Professional hair coloring and highlights",
    longDescription: "Transform your hair with our expert coloring services, from subtle highlights to bold color transformations using premium products.",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
    price: "₹2,500 - ₹8,000",
    duration: "120-180 mins",
    rating: 4.6,
    services: [
      { name: "Root Touch-up", price: "₹2,500" },
      { name: "Full Color", price: "₹4,500" },
      { name: "Highlights", price: "₹5,500" },
      { name: "Balayage", price: "₹8,000" }
    ]
  }
];

const categories = ["All", "Hair Care", "Skincare", "Nail Care", "Special Occasions", "Wellness"];

const EnhancedServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const filteredServices = selectedCategory === "All" 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setSelectedService(null);
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: '#333',
      width: '100vw',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(135deg, rgba(212, 165, 116, 0.8), rgba(184, 140, 92, 0.9)),
                          url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1500&q=80")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
            backgroundSize: '200% auto',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 300,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            Beauty & Elegance Redefined
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '1.1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} fill="currentColor" />
              <span>5-Star Rated</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Heart size={20} fill="currentColor" />
              <span>1000+ Happy Clients</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        padding: '2rem 0',
        borderBottom: '3px solid #e91e63'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 600,
            color: '#2c3e50',
            marginBottom: '2rem'
          }}>
            Choose Your Service Category
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.8rem 1.5rem',
                  border: 'none',
                  borderRadius: '25px',
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, #e91e63, #ad1457)' 
                    : 'white',
                  color: selectedCategory === category ? 'white' : '#2c3e50',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category 
                    ? '0 8px 20px rgba(233, 30, 99, 0.3)' 
                    : '0 4px 15px rgba(0,0,0,0.1)',
                  transform: selectedCategory === category ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'linear-gradient(135deg, #f8bbd9, #f48fb1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(233, 30, 99, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'white';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
        minHeight: '60vh'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2rem'
          }}>
            {filteredServices.map((service) => (
              <div key={service.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                position: 'relative',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#e91e63';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                {/* Service Image */}
                <div style={{
                  height: '250px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(233, 30, 99, 0.9)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {service.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Star size={14} fill="#ffc107" color="#ffc107" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{service.rating}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: 1.5
                  }}>
                    {service.longDescription}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '12px'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#e91e63'
                      }}>
                        {service.price}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#7f8c8d',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.25rem'
                      }}>
                        <Clock size={14} />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Service Options Preview */}
                  <div style={{
                    background: '#f8f9fa',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#2c3e50',
                      marginBottom: '0.5rem'
                    }}>
                      Service Options:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {service.services.slice(0, 2).map((option, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{ color: '#34495e' }}>{option.name}</span>
                          <span style={{ fontWeight: 600, color: '#e91e63' }}>{option.price}</span>
                        </div>
                      ))}
                      {service.services.length > 2 && (
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#7f8c8d',
                          fontStyle: 'italic'
                        }}>
                          +{service.services.length - 2} more options available
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <button
                      onClick={() => handleBookNow(service)}
                      style={{
                        flex: 1,
                        padding: '1rem 1.5rem',
                        background: 'linear-gradient(135deg, #e91e63, #ad1457)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <Calendar size={18} />
                      Book Now
                    </button>
                    <button
                      style={{
                        padding: '1rem',
                        background: 'transparent',
                        color: '#e91e63',
                        border: '2px solid #e91e63',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#e91e63';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#e91e63';
                      }}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }} onClick={closeModal}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              padding: '2rem',
              borderBottom: '1px solid #eee'
            }}>
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#7f8c8d'
                }}
              >
                ×
              </button>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>
                {selectedService.title}
              </h2>
              <p style={{
                color: '#7f8c8d',
                fontSize: '1.1rem'
              }}>
                {selectedService.longDescription}
              </p>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Choose Your Service
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {selectedService.services.map((option, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '2px solid #f1f2f6',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#e91e63';
                    e.currentTarget.style.background = '#ffeef7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f1f2f6';
                    e.currentTarget.style.background = 'white';
                  }}>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#2c3e50'
                      }}>
                        {option.name}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#7f8c8d',
                        marginTop: '0.25rem'
                      }}>
                        Duration: {selectedService.duration}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#e91e63'
                    }}>
                      {option.price}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  style={{
                    flex: 1,
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #e91e63, #ad1457)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Phone size={18} />
                  Call to Book: +91 98765 43210
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            Ready to Transform Your Look?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Book your appointment today and experience the difference of professional beauty care
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '1rem 2rem',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 25px rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <Phone size={20} />
              Call Now
            </button>
            <button style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              <Calendar size={20} />
              Book Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;