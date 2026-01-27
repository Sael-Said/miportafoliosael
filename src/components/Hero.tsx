import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Facebook, MapPin, Briefcase, Award } from 'lucide-react';
import sael from "../assets/yo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github size={22} />, href: 'https://github.com/Sael-Said', label: 'GitHub', color: 'hover:bg-gray-900' },
    { icon: <Linkedin size={22} />, href: 'https://linkedin.com/in/sael-said', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <Facebook size={22} />, href: 'https://www.facebook.com/saelsaid.vidalavalos/', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: <Mail size={22} />, href: 'mailto:avalossael@gmail.com', label: 'Email', color: 'hover:bg-purple-600' }
  ];

  const stats = [
    { icon: <Award size={20} />, label: 'Graduado con Excelencia', value: '2024' },
    { icon: <Briefcase size={20} />, label: 'Proyectos Completados', value: '2+' },
    { icon: <MapPin size={20} />, label: 'Vallegrande, Bolivia', value: '' }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 pt-20 px-4">
      {/* Elementos decorativos animados de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge de disponibilidad */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in-down">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full absolute top-0"></div>
          </div>
          <span className="text-white text-sm font-medium">Disponible para oportunidades</span>
        </div>

        {/* Imagen de perfil con efectos */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8 animate-scale-in">
          {/* Anillos giratorios */}
          <div className="absolute inset-0 -m-4">
            <div className="w-full h-full border-4 border-white/20 rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute inset-0 -m-8">
            <div className="w-full h-full border-4 border-dashed border-white/10 rounded-full animate-spin-reverse"></div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          
          {/* Imagen */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
            <img src={sael} alt="Sael Said Vidal Avalos" className="w-full h-full object-cover" />
          </div>

          {/* Icono verificado */}
          <div className="absolute bottom-2 right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce-slow">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Nombre con efecto de typing */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up leading-tight">
          <span className="inline-block animate-wave">👋</span>{' '}
          Hola, soy{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200 animate-gradient">
            Sael Said
          </span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-semibold mb-4 animate-fade-in-up animation-delay-200">
          Ingeniero de Sistemas
        </h2>

        {/* Descripción con efecto de typing */}
        <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in-up animation-delay-400 px-4">
          <span className="font-semibold text-yellow-300">Graduado con Excelencia Académica</span>
          <br className="hidden sm:block" />
          Desarrollador Full Stack apasionado por crear soluciones web innovadoras
        </p>

        {/* Stack tecnológico */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-600">
          {['React', 'Django', 'Python', 'MySQL', 'Tailwind'].map((tech, idx) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              style={{ animationDelay: `${600 + idx * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-800 px-4">
          <button
            onClick={() => scrollToSection('proyectos')}
            className="group relative px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Briefcase size={20} />
              Ver Proyectos
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contacto')}
            className="group relative px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail size={20} />
              Contáctame
            </span>
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-1000">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2 mb-2 text-blue-200">
                {stat.icon}
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
              {stat.value && (
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up animation-delay-1200">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md ${social.color} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-white/20 shadow-lg hover:shadow-2xl`}
              aria-label={social.label}
            >
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block animate-bounce-slow">
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown size={40} className="mx-auto" />
            <p className="text-sm mt-2">Descubre más</p>
          </button>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
        @keyframes wave { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(20deg); } 75% { transform: rotate(-20deg); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-scale-in { animation: scale-in 1s ease-out; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .bg-dots { background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>
    </section>
  );
};

export default Hero;
