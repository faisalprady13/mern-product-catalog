import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.get('/api/notes', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
