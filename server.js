const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Hello from your Azure-deployed Node.js app!');
});

// Optional: handle other routes
app.get('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
