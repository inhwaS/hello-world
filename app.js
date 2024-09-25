const express = require('express');
const app = express();
const port = 3000;

// Serve static files (e.g., HTML, CSS) from the "public" folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

