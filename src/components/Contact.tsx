import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_ggh1duk',
        'template_n4ydx2r',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'fUaq0b4OuudnujikI'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">¿Interesado en trabajar juntos? ¡Hablemos! Estoy disponible para nuevas oportunidades</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm">📞</span>
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:avalossael@gmail.com" className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</div>
                    <div className="text-gray-600 text-sm">avalossael@gmail.com</div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a href="tel:+59175575524" className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Teléfono</div>
                    <div className="text-gray-600 text-sm">+591 75575524</div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600 text-sm">Vallegrande, Santa Cruz, Bolivia</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg"></span>
                Sígueme en redes
              </h4>
              <div className="flex gap-4">
                <a href="https://github.com/Sael-Said" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    <Github size={24} />
                  </div>
                </a>
                <a href="https://linkedin.com/in/sael-said" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    <Linkedin size={24} />
                  </div>
                </a>
                <a href="https://facebook.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    <Facebook size={24} />
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0"></div>
                </div>
                <span className="font-semibold text-gray-900">Disponible para oportunidades</span>
              </div>
              <p className="text-sm text-gray-600">Respondo en menos de 24 horas</p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Send className="text-blue-600" size={24} />
                  Envíame un mensaje
                </h3>

                <div className="space-y-5">
                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Nombre *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required placeholder="Tu nombre completo" className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200 hover:border-gray-300'}`} />
                    {focusedField === 'name' && <div className="absolute right-3 top-11 text-blue-500">✓</div>}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} required placeholder="tu@email.com" className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200 hover:border-gray-300'}`} />
                    {focusedField === 'email' && <div className="absolute right-3 top-11 text-blue-500">✓</div>}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Mensaje *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} required rows={5} placeholder="Cuéntame sobre tu proyecto o consulta..." className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none resize-none transition-all duration-300 ${focusedField === 'message' ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200 hover:border-gray-300'}`}></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">{formData.message.length} caracteres</div>
                  </div>

                  <button onClick={handleSubmit} disabled={isLoading || !formData.name || !formData.email || !formData.message} type="button" className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>

                  {status && (
                    <div className={`p-4 rounded-xl flex items-center gap-3 ${status === 'success' ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                      {status === 'success' ? (
                        <>
                          <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                          <div>
                            <p className="font-semibold text-green-900">¡Mensaje enviado!</p>
                            <p className="text-sm text-green-700">Te contactaré pronto.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <XCircle className="text-red-600 flex-shrink-0" size={24} />
                          <div>
                            <p className="font-semibold text-red-900">Error al enviar</p>
                            <p className="text-sm text-red-700">Intenta de nuevo.</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Contact;