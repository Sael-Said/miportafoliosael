
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      title: "Sistema POS para Licorería",
      description:
        "Sistema completo de punto de venta con gestión de inventario, ventas, compras y catálogo de productos. Incluye manejo de usuarios y roles.",
      technologies: ["React", "Django", "MySQL", "REST API"],
      features: [
        "Inventario en tiempo real",
        "Ventas y compras",
        "Catálogo de productos",
        "Usuarios y roles",
        "Reportes y estadísticas",
      ],
      github: "https://github.com/Sael-Said/licoreria",
      demo: null,
      gradient: "from-blue-500 to-blue-700",
      badge: "Full Stack",
    },
    {
      title: "E-Commerce Licorería",
      description:
        "Plataforma de comercio electrónico con carrito de compras, checkout completo y dashboard administrativo.",
      technologies: ["React", "Django", "MySQL", "Tailwind"],
      features: [
        "Catálogo interactivo",
        "Carrito de compras",
        "Checkout completo",
        "Panel administrativo",
        "Reportes",
      ],
      github: null,
      demo: null,
      gradient: "from-indigo-500 to-purple-600",
      badge: "Web App",
    },
  ]

  return (
    <section
      id="proyectos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Proyectos reales que demuestran mis habilidades como desarrollador
            Full Stack
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              {/* Header gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                {/* Badge */}
                <span
                  className={`inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                >
                  {project.badge}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-blue-600 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-700 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      <Github size={18} />
                      Código
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-5 py-2.5 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed">
                      <Github size={18} />
                      Privado
                    </span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
