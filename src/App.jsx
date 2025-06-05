import { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "https://landing-pro-backend.onrender.com/contact",
          formData
        );
        alert(response.data.message);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Submission error:", {
          message: error.message,
          code: error.code,
          response: error.response ? error.response.data : null,
        });
        alert(`Error submitting form: ${error.message}`);
      }
    },
    [formData]
  );

  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: 'Career Strategy Coaching',
      description:
        'Develop a personalized roadmap to achieve your professional goals. Through one-on-one sessions, we’ll identify your strengths, refine your career vision, and create actionable steps to secure promotions, land dream jobs, or transition to new industries. Includes resume optimization and LinkedIn profile enhancement.',
      image: 'https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyZWVyfGVufDB8fDB8fHww',
    },
    {
      title: 'Interview Preparation',
      description:
        'Master the art of interviewing with tailored mock interviews and feedback. Learn to articulate your value, handle tough questions, and project confidence. We’ll cover behavioral, technical, and case-based interviews, ensuring you’re ready for any scenario, from corporate roles to startup pitches.',
      image: 'https://plus.unsplash.com/premium_photo-1676666377229-12a9ad6b186a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Leadership Development',
      description:
        'Elevate your leadership skills to inspire teams and drive results. This program focuses on emotional intelligence, effective communication, and strategic decision-making. Ideal for new managers or seasoned executives aiming to enhance their influence and lead with impact in today’s dynamic workplaces.',
      image: 'https://plus.unsplash.com/premium_photo-1661605653366-b1a6a6831cd4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Landing Pro Demo</title>
        <meta
          name="description"
          content="Professional portfolio demo by [Your Name]"
        />
      </Helmet>
      <section id="hero" className="bg-blue-600 text-white p-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">John Doe - Career Coach</h1>
          <p className="mt-4 max-w-md">
            Transform your career with personalized coaching.
          </p>
          <button
            onClick={scrollToServices}
            className="mt-4 bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-300"
          >
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="John Doe, Career Coach"
            className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          />
        </div>
      </section>
      <section id="about" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">About John Doe</h2>
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <p className="mb-4">
          John Doe is a seasoned career coach with over 15 years of experience in human resources
          and professional development. Holding a Master’s in Organizational Psychology from the
          University of Buenos Aires, John has empowered hundreds of professionals across
          Argentina and Latin America to achieve their career aspirations.
        </p>
        <p className="mb-4">
          Before founding his coaching practice, John held senior HR roles at multinational
          corporations, where he designed leadership programs and guided employees through career
          transitions. His approach combines evidence-based strategies, personalized mentorship,
          and a deep understanding of today’s job market, helping clients navigate promotions,
          career changes, or entrepreneurial ventures.
        </p>
        <p className="mb-4">
          As a certified ICF (International Coaching Federation) coach, John is committed to
          fostering confidence and clarity in his clients. He’s a frequent speaker at career
          workshops in Buenos Aires and has contributed articles to La Nación on workplace trends.
          Outside of coaching, John enjoys mentoring young professionals and exploring Patagonia’s
          hiking trails.
        </p>
        <p>
          <strong>Mission:</strong> To unlock every client’s potential through tailored guidance,
          actionable strategies, and unwavering support.
        </p>
      </div>
    </section>
      <section id="services" className="p-10 bg-gray-300">
      <h2 className="text-3xl font-bold text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img
              src={service.image}
              alt={service.title}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
      <section id="contact" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border rounded"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded w-full"
        >
          Send Message
        </button>
      </form>
    </section>
    </div>
  );
}

export default App;
