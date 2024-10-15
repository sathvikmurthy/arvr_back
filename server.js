const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/model', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'human_anatomy.fbx'));
});

app.get('/api/education-data', (req, res) => {
  const educationData = {
    organs: [
      { name: 'Heart', description: 'Pumps blood throughout the body' },
      { name: 'Lungs', description: 'Responsible for respiration' },
      { name: 'Brain', description: 'Controls the nervous system' }
    ]
  };
  res.json(educationData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});