import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare } from "lucide-react";
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Hair Styling & Cut',
    'Facial Treatment',
    'Manicure & Pedicure',
    'Bridal Makeup',
    'Spa Treatment',
    'Eyebrow Threading',
    'Hair Coloring',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const emailData = {
      to_name: 'Beauty Salon Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      reply_to: formData.email
    };

    // send email via EmailJS
    await emailjs.send(
      'service_tyofc8f',   // ✅ replace with your Service ID
      'template_h47kt6m',  // ✅ replace with your Template ID
      emailData,
      '4HGu7HJvS_SydtF5H' // ✅ replace with your Public Key
    );

    await emailjs.send(
      "service_tyofc8f",
      "template_55sppmb", // the template you created
      {
        user_name: formData.name,   // 👈 comes from state
    user_email: formData.email, // 👈 comes from state
    message: formData.message, 
      },
      "4HGu7HJvS_SydtF5H"
    );

    console.log('Email successfully sent!');
    setIsSubmitted(true);

    // reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // auto-hide success after 5 sec
    setTimeout(() => setIsSubmitted(false), 5000);

  } catch (error) {
    console.error('EmailJS error:', error);
    alert("Something went wrong while sending the message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};




  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      info: "Sangamner, Maharashtra 422605",
      detail: "Maldad Rd, Saidarshan Colony"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      info: "+91 7888155320",
      detail: "Available 10 AM - 8 PM"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      info: "contact@beautyparlour.com",
      detail: "We reply within 24 hours"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      info: "Mon - Sat: 10:00 AM - 8:00 PM",
      detail: "Sunday: 10:00 AM - 6:00 PM"
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffeef7, #f8e8ff)',
      paddingTop: '80px',
      width:'100vw'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(135deg, rgba(219, 112, 147, 0.8), rgba(186, 85, 211, 0.9)),
                          url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1500&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 2rem',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.3)'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Get In Touch
          </h1>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: 300,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            From glam to glow, we’ve got you covered<br/>reach out today and let’s make magic happen!
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {contactInfo.map((item, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(219, 112, 147, 0.2)';
              e.currentTarget.style.borderColor = '#db7093';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{
                color: '#db7093',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#34495e',
                fontWeight: 500,
                marginBottom: '0.5rem'
              }}>
                {item.info}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: '#7f8c8d'
              }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Side - Form */}
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '25px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            {isSubmitted && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#10b981',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                zIndex: 10
              }}>
                <CheckCircle size={20} />
                Message sent successfully!
              </div>
            )}

            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2c3e50',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Send Us a Message
            </h2>

            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  <User size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: errors.name ? '2px solid #e74c3c' : '2px solid #ecf0f1',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#db7093'}
                  onBlur={(e) => e.target.style.borderColor = errors.name ? '#e74c3c' : '#ecf0f1'}
                />
                {errors.name && (
                  <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 576 ? '1fr 1fr' : '1fr',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.email ? '2px solid #e74c3c' : '2px solid #ecf0f1',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#db7093'}
                    onBlur={(e) => e.target.style.borderColor = errors.email ? '#e74c3c' : '#ecf0f1'}
                  />
                  {errors.email && (
                    <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.phone ? '2px solid #e74c3c' : '2px solid #ecf0f1',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#db7093'}
                    onBlur={(e) => e.target.style.borderColor = errors.phone ? '#e74c3c' : '#ecf0f1'}
                  />
                  {errors.phone && (
                    <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: errors.service ? '2px solid #e74c3c' : '2px solid #ecf0f1',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#db7093'}
                  onBlur={(e) => e.target.style.borderColor = errors.service ? '#e74c3c' : '#ecf0f1'}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && (
                  <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    {errors.service}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  <MessageSquare size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your requirements, preferred appointment time, or any questions you have..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: errors.message ? '2px solid #e74c3c' : '2px solid #ecf0f1',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#db7093'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#e74c3c' : '#ecf0f1'}
                />
                {errors.message && (
                  <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1.2rem 2rem',
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #bdc3c7, #95a5a6)' 
                    : 'linear-gradient(135deg, #db7093, #ba55d3)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(219, 112, 147, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid white',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Map and Additional Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Map Placeholder */}
            <div style={{
              background: 'white',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
              height: '300px',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #e8f5e8, #f0f8f0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#2c3e50'
              }}>
                <MapPin size={48} style={{ color: '#db7093', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Find Us Here</h3>
                <p style={{ textAlign: 'center', color: '#7f8c8d' }}>
                  
                  Maldad Rd, Saidarshan Colony, Sangamner, Maharashtra 422605
                </p>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div style={{
              background: 'linear-gradient(135deg, #db7093, #ba55d3)',
              color: 'white',
              padding: '2rem',
              borderRadius: '25px',
              boxShadow: '0 15px 40px rgba(219, 112, 147, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Why Choose Us?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Professional certified beauticians</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Premium quality products</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Hygenic and safe environment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Personalized beauty solutions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Flexible appointment scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;