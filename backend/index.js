const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submission:', { name, email, message });
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));