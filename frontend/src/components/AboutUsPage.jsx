import React, { useState, useEffect } from 'react';


const BeautifulAboutUsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: "Sofia Rodriguez",
      role: "Master Beautician & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763095?auto=format&fit=crop&w=500&q=80",
      specialty: "Advanced Skincare & Anti-Aging",
      experience: "15+ Years",
      description: "Passionate about bringing out natural beauty in every client"
    },
    {
      name: "Emma Thompson",
      role: "Senior Hair Stylist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      specialty: "Color Correction & Styling",
      experience: "12+ Years",
      description: "Creating stunning transformations that reflect your personality"
    },
    {
      name: "Isabella Chen",
      role: "Nail Art Specialist",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=500&q=80",
      specialty: "Intricate Nail Design",
      experience: "8+ Years",
      description: "Turning nails into miniature works of art"
    }
  ];

  const stats = [
    { number: "10000+", label: "Happy Clients", icon: "😊" },
    { number: "15+", label: "Years Experience", icon: "⭐" },
    { number: "50+", label: "Services Offered", icon: "💅" },
    { number: "98%", label: "Satisfaction Rate", icon: "❤️" }
  ];

  const values = [
    {
      icon: "✨",
      title: "Excellence",
      description: "We strive for perfection in every service, using only premium products and advanced techniques."
    },
    {
      icon: "🌿",
      title: "Natural Beauty",
      description: "Enhancing your natural features while promoting healthy skin and sustainable practices."
    },
    {
      icon: "🤝",
      title: "Personal Care",
      description: "Every client receives individualized attention and customized treatments for their unique needs."
    },
    {
      icon: "💎",
      title: "Luxury Experience",
      description: "From the moment you enter, enjoy a premium experience in our elegant, relaxing environment."
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      overflow: 'hidden'
    }}>
      {/* Hero Section with Parallax */}
      <div style={{
        height: '100vh',
        background: `linear-gradient(135deg, rgba(212, 165, 116, 0.9), rgba(184, 140, 92, 0.95)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1500&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transform: `translateY(${scrollY * 0.5}px)`
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
        }}></div>
        
        <div style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 2,
          animation: 'fadeInUp 2s ease-out'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: '"Georgia", serif',
            fontWeight: 700,
            marginBottom: '1rem',
            textShadow: '3px 3px 15px rgba(0,0,0,0.7)',
            background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff, #e0e0e0)',
            backgroundSize: '400% auto',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 4s linear infinite'
          }}>
            About Us
          </h1>
          <p style={{
            fontSize: '1.8rem',
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            opacity: 0.9,
            animation: 'fadeInUp 2s ease-out 0.5s both'
          }}>
            Where Beauty Meets Passion
          </p>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #fff, transparent)',
            margin: '2rem auto',
            animation: 'fadeInUp 2s ease-out 1s both'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          borderRadius: '50%',
          animation: 'floating 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)',
          borderRadius: '50%',
          animation: 'floating 8s ease-in-out infinite reverse'
        }}></div>
      </div>

      {/* Our Story Section */}
      <div style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #fafafa, #f0f0f0)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{
            animation: 'slideInLeft 1.5s ease-out'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: '"Georgia", serif',
              color: '#2c3e50',
              marginBottom: '2rem',
              position: 'relative'
            }}>
              Our Story
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #d4a574, #b88c5c)',
                borderRadius: '2px'
              }}></div>
            </h2>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.8,
              color: '#555',
              marginBottom: '2rem'
            }}>
              Founded in 2008 with a vision to revolutionize the beauty industry, our salon has grown from a small neighborhood gem into a premier destination for luxury beauty treatments.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#666',
              marginBottom: '3rem'
            }}>
              We believe that true beauty comes from confidence, and our mission is to help every client discover their unique radiance through personalized, professional care.
            </p>
            <button style={{
              padding: '1.2rem 3rem',
              background: 'linear-gradient(135deg, #d4a574, #b88c5c)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 30px rgba(180, 140, 90, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(180, 140, 90, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(180, 140, 90, 0.4)';
            }}>
              Learn More
            </button>
          </div>
          
          <div style={{
            position: 'relative',
            animation: 'slideInRight 1.5s ease-out'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              transform: 'rotate(2deg)'
            }}>
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                   alt="Our salon" 
                   style={{
                     width: '100%',
                     height: '500px',
                     objectFit: 'cover',
                     transition: 'transform 0.6s ease'
                   }}
                   onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                   onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, rgba(212,165,116,0.2), transparent, rgba(184,140,92,0.2))',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50, #34495e)',
        padding: '6rem 2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,165,116,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(184,140,92,0.1) 0%, transparent 50%)',
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? 4 : 2}, 1fr)`,
          gap: '3rem',
          position: 'relative',
          zIndex: 2
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              animation: `fadeInUp 1s ease-out ${index * 0.2}s both`
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                animation: 'bounce 2s infinite'
              }}>
                {stat.icon}
              </div>
              <h3 style={{
                fontSize: '3rem',
                fontWeight: 700,
                margin: '1rem 0',
                background: 'linear-gradient(45deg, #fff, #d4a574)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {stat.number}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                opacity: 0.9
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontFamily: '"Georgia", serif',
            color: '#2c3e50',
            marginBottom: '2rem'
          }}>
            Meet Our Expert Team
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our talented professionals are passionate about beauty and dedicated to making you look and feel amazing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? 3 : 1}, 1fr)`,
          gap: '3rem'
        }}>
          {team.map((member, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
              transition: 'all 0.6s ease',
              animation: `fadeInUp 1s ease-out ${index * 0.3}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-20px) rotateY(5deg)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img src={member.image} 
                     alt={member.name} 
                     style={{
                       width: '100%',
                       height: '300px',
                       objectFit: 'cover',
                       transition: 'transform 0.6s ease'
                     }}
                     onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                     onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  height: '100px'
                }}></div>
              </div>
              
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#d4a574',
                  fontWeight: 500,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontSize: '0.9rem'
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  marginBottom: '1rem',
                  lineHeight: 1.6
                }}>
                  {member.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #eee'
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#888',
                    fontWeight: 500
                  }}>
                    {member.specialty}
                  </span>
                  <span style={{
                    background: 'linear-gradient(135deg, #d4a574, #b88c5c)',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}>
                    {member.experience}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: '"Georgia", serif',
              marginBottom: '2rem'
            }}>
              Our Core Values
            </h2>
            <p style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? 2 : 1}, 1fr)`,
            gap: '3rem'
          }}>
            {values.map((value, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '25px',
                padding: '3rem 2rem',
                border: '1px solid rgba(255,255,255,0.2)',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                animation: `fadeInUp 1s ease-out ${index * 0.2}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '2rem',
                  animation: 'pulse 2s infinite'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  fontFamily: '"Georgia", serif'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  opacity: 0.9
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-15px,0);
          }
          70% {
            transform: translate3d(0,-7px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default BeautifulAboutUsPage;