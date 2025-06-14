import { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (validateForm()) {
        try {
          const response = await axios.post(
            "https://landing-pro-backend.onrender.com/contact",
            formData
          );
          setAlert({ type: "success", message: response.data.message });
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
          setTimeout(() => setAlert(null), 5000);
        } catch (error) {
          console.error("Submission error:", {
            message: error.message,
            code: error.code,
            response: error.response ? error.response.data : null,
          });
          setAlert({
            type: "error",
            message: `Error al enviar el mensaje. Intenta de nuevo. ${error.message}`,
          });
          setTimeout(() => setAlert(null), 5000);
        }
      }
    },
    [formData]
  );

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Coaching de estrategia profesional",
      description:
        "Desarrolla una hoja de ruta personalizada para alcanzar tus objetivos profesionales. A través de sesiones individuales, identificaremos tus fortalezas, definiremos tu visión de carrera y crearemos pasos prácticos para asegurar ascensos, conseguir el trabajo de tus sueños o adaptarte a nuevos sectores. Incluye optimización de currículum y mejora de tu perfil de LinkedIn.",
      image:
        "https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyZWVyfGVufDB8fDB8fHww",
    },
    {
      title: "Preparación de la entrevista",
      description:
        "Domina el arte de la entrevista con simulacros de entrevista personalizados y retroalimentación. Aprende a expresar tu valor, a responder preguntas difíciles y a proyectar confianza. Abarcaremos entrevistas conductuales, técnicas y basadas en casos prácticos, asegurándonos de que estés preparado para cualquier escenario, desde puestos corporativos hasta presentaciones de startups.",
      image:
        "https://plus.unsplash.com/premium_photo-1676666377229-12a9ad6b186a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desarrollo de liderazgo",
      description:
        "Mejora tus habilidades de liderazgo para inspirar a tus equipos e impulsar resultados. Este programa se centra en la inteligencia emocional, la comunicación efectiva y la toma de decisiones estratégicas. Ideal para nuevos gerentes o ejecutivos experimentados que buscan aumentar su influencia y liderar con impacto en los dinámicos entornos laborales actuales.",
      image:
        "https://plus.unsplash.com/premium_photo-1661605653366-b1a6a6831cd4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Landing Pro Demo</title>
        <meta
          name="description"
          content="Demostración de portafolio profesional por Nicolás Palma"
        />
      </Helmet>
      <nav className="bg-blue-700 text-white p-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold"
          >
            Carlos López Coaching
          </button>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:underline"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:underline"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:underline"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>
      <section
        id="hero"
        className="bg-blue-500 text-white p-10 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Carlos López - Career Coach</h1>
          <p className="mt-4 max-w-md">
            Transforma tu carrera con coaching personalizado.
          </p>
          <button
            onClick={() => scrollToSection("services")}
            className="mt-4 bg-white text-blue-700 px-6 py-2 rounded border border-blue-600 hover:bg-gray-100"
          >
            Más información
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Juan Pérez, Career Coach"
            className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          />
        </div>
      </section>
      <section id="about" className="p-10 sm:p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Sobre Carlos López
        </h2>
        <div className="max-w-4xl mx-auto mt-6">
          <img
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Juan Pérez"
            className="mx-auto mb-4 rounded-full h-32 w-32 object-cover"
          />
          <div className="max-w-4xl mx-auto mt-6 text-center text-gray-900 bg-blue-50 p-6 rounded-lg shadow-sm">
            <p className="mb-4">
              Carlos López es un coach de carrera experimentado con más de 15
              años de experiencia en recursos humanos y desarrollo profesional.
              Con una Maestría en Psicología Organizacional de la Universidad de
              Buenos Aires, Carlos ha ayudado a cientos de profesionales en
              Argentina y Latinoamérica a alcanzar sus aspiraciones
              profesionales.
            </p>
            <p className="mb-4">
              Antes de fundar su consultora de coaching, Carlos ocupó altos
              cargos de RR. HH. en corporaciones multinacionales, donde diseñó
              programas de liderazgo y guió a empleados en sus transiciones
              profesionales. Su enfoque combina estrategias basadas en la
              evidencia, mentoría personalizada y un profundo conocimiento del
              mercado laboral actual, ayudando a los clientes a afrontar
              ascensos, cambios de carrera o emprendimientos.
            </p>
            <p className="mb-4">
              Como coach certificado por la ICF (Federación Internacional de
              Coaching), Carlos se compromete a fomentar la confianza y la
              claridad en sus clientes. Participa frecuentemente como orador en
              talleres de desarrollo profesional en Buenos Aires y ha publicado
              artículos en La Nación sobre tendencias laborales. Además de su
              faceta como coach, Carlos disfruta asesorando a jóvenes
              profesionales y explorando las rutas de senderismo de la
              Patagonia.
            </p>
            <p>
              <strong>Misión:</strong> Liberar el potencial de cada cliente
              mediante asesoramiento personalizado, estrategias prácticas y un
              apoyo incondicional.
            </p>
          </div>
        </div>
      </section>
      <section id="services" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center border border-blue-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="p-6 sm:p-10 bg-gray-100">
        {alert && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white ${
              alert.type === "success" ? "bg-blue-500" : "bg-red-500"
            } transition-opacity duration-300`}
          >
            {alert.message}
          </div>
        )}
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Contáctame
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 space-y-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre"
              className={`w-full p-3 border rounded ${
                errors.name ? "border-red-500" : "border-blue-500"
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className={`w-full p-3 border rounded ${
                errors.email ? "border-red-500" : "border-blue-500"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Mensaje"
              className={`w-full p-3 border rounded ${
                errors.message ? "border-red-500" : "border-blue-500"
              }`}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded w-full hover:bg-blue-500 transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>
      <footer className="bg-blue-700 text-white p-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Carlos López Coaching. Desarrollado
          por{" "}
          <a
            href="https://ngpalma.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            Nicolás Palma
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
