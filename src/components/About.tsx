import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Sobre Mí
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          
          {/* Card principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Soy un{" "}
              <span className="font-semibold text-blue-600">
                Ingeniero de Sistemas graduado
              </span>{" "}
              con excelencia académica, apasionado por el desarrollo de
              software y la creación de soluciones tecnológicas que generen
              impacto real.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Me especializo en desarrollo{" "}
              <span className="font-semibold">Full Stack</span>, con fuerte
              enfoque en{" "}
              <span className="font-semibold">Frontend</span> y{" "}
              <span className="font-semibold">Backend</span>. Disfruto transformar
              ideas en aplicaciones web funcionales y escalables siguiendo buenas
              prácticas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Durante mi formación universitaria desarrollé sistemas POS y
              plataformas e-commerce, adquiriendo experiencia en el ciclo
              completo del desarrollo de software. Busco mi primera oportunidad
              profesional para aportar valor y seguir creciendo.
            </motion.p>

            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-2 text-gray-600"
            >
              <MapPin size={20} className="text-blue-600" />
              <span>Vallegrande, Santa Cruz, Bolivia</span>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { value: "2025", label: "Graduado", color: "blue" },
              { value: "5+", label: "Tecnologías", color: "indigo" },
              { value: "2", label: "Proyectos Destacados", color: "purple" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl shadow-md bg-${item.color}-50`}
              >
                <div
                  className={`text-4xl font-extrabold text-${item.color}-600 mb-2`}
                >
                  {item.value}
                </div>
                <div className="text-gray-700">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
