import React, { useState } from 'react';
import { Layout, Server, Database, Code2 } from 'lucide-react';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Python', 'Django', 'REST APIs'],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Base de Datos',
      icon: <Database className="w-8 h-8" />,
      skills: ['MySQL', 'MySQL Workbench'],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Herramientas',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const colorVariants: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Brillo de fondo al hacer hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

              {/* Borde animado */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`}></div>

              {/* Icono con animación */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${colorVariants[category.color]} rounded-xl flex items-center justify-center text-white mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {category.icon}
                </div>
                
                {/* Pulso de luz */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorVariants[category.color]} opacity-0 group-hover:opacity-50 animate-ping-slow`}></div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills con animación */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:${colorVariants[category.color]} hover:text-white hover:shadow-md cursor-default`}
                    style={{ 
                      animationDelay: `${(idx * 100) + (skillIdx * 50)}ms`,
                      opacity: hoveredIndex === idx ? 1 : 0.95
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contador de habilidades */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Skills</span>
                  <span className={`font-bold bg-gradient-to-r ${colorVariants[category.color]} bg-clip-text text-transparent`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadística general */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-gray-600 font-medium">Total de tecnologías:</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;