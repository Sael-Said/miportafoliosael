import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: <User size={20} /> },
    { id: 'habilidades', label: 'Habilidades', icon: <Code size={20} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Briefcase size={20} /> },
    { id: 'contacto', label: 'Contacto', icon: <Mail size={20} /> }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm shadow-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo con animación */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="group flex items-center space-x-2 relative"
            >
              <div className={`transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-2xl group-hover:scale-110 transform transition-all`}>
                <span className={`${scrolled ? 'text-lg' : 'text-xl'}`}>SV</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'} text-gray-800 group-hover:text-blue-600`}>
                  <span className="text-blue-600">Sael</span> Said
                </div>
              </div>
              {/* Efecto de brillo al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full"></div>
            </button>
            
            {/* Menu Desktop con indicadores */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {item.icon}
                    </span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </span>
                  
                  {/* Indicador activo */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                  
                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Botón Hamburguesa Mejorado */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 flex items-center justify-center group"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white top-3 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Línea de progreso de scroll */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300" style={{ width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}></div>
      </nav>

      {/* Menu Mobile Premium */}
      {isOpen && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-gradient-to-br from-black/60 to-black/40 md:hidden backdrop-blur-md z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
            style={{ top: scrolled ? '72px' : '88px' }}
          ></div>

          {/* Menu deslizable con diseño moderno */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-br from-white to-blue-50 md:hidden shadow-2xl z-50 animate-slide-in-right overflow-hidden"
            style={{ marginTop: scrolled ? '72px' : '88px' }}
          >
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

            {/* Contenido del menú */}
            <div className="relative h-full flex flex-col p-6 overflow-y-auto">
              {/* Header del menú */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    SV
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sael Said</p>
                    <p className="text-sm text-gray-600">Ingeniero de Sistemas</p>
                  </div>
                </div>
              </div>

              {/* Items del menú con animación escalonada */}
              <div className="space-y-2 flex-1">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/60 hover:bg-white text-gray-700 hover:text-blue-600 shadow-md hover:shadow-xl'
                    }`}
                    style={{
                      animation: `slideInItem 0.4s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-white/20'
                        : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold text-lg flex-1 text-left">{item.label}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${activeSection === item.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Footer del menú */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white text-center">
                  <p className="text-sm font-semibold mb-1">¿Listo para trabajar juntos?</p>
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="mt-2 w-full bg-white text-blue-600 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Contáctame
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInItem {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;