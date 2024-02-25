const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve the images.json file
app.get('/images.json', async(req, res) => {
//   const imagesPath = path.join(__dirname, 'public', 'images.json');
//   fs.readFile(imagesPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading images.json:', err);
//       return res.status(500).send('Internal Server Error');
//     }
//     res.setHeader('Cache-Control', 'no-store'); // Prevent caching
//     console.log(JSON.parse(data))
//     res.json(JSON.parse(data));
//   });
const images = await fs.readFile('./images.json', 'utf8');
res.json(JSON.parse(images));
});

// Handle the root path with a simple message
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-store'); // Prevent caching
  res.send('Hello, this is the root path!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
