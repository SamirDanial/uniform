// server/server.js
const express = require('express');
const app = express();
const port = 5000;


const productData = {
  name: 'Special Force Greeting',
  title: 'Light Weight For Greeting',
  price: 199.99,
  description: 'This is a dummy description for this product',
  imageUrl: '../assets/product-image.jpg',
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get('/api/product', (req, res) => {
  res.json(productData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
