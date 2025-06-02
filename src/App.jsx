import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/contact', formData);
      const response = await axios.post('https://landing-pro-backend.onrender.com/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', {
        message: error.message,
        code: error.code,
        response: error.response ? error.response.data : null,
      });
      alert(`Error submitting form: ${error.message}`);
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Landing Pro Demo</title>
        <meta name="description" content="Professional portfolio demo by [Your Name]" />
      </Helmet>
      <section className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">John Doe - Career Coach</h1>
        <p className="mt-4">Transform your career with personalized coaching.</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded">
          Learn More
        </button>
      </section>
      <section className="p-10">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4">
          I’m a career coach with 10 years of experience helping professionals succeed.
        </p>
      </section>
      <section className="p-10 bg-gray-200">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">Career Planning - $500</div>
          <div className="bg-white p-4 rounded shadow">Resume Review - $200</div>
          <div className="bg-white p-4 rounded shadow">Interview Prep - $300</div>
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 mb-4 border rounded"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
