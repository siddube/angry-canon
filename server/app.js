const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 4200;
const publicPath = path.join(__dirname, '../public');
app.use('/assets', express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Template running on  localhost:${port}`);
});