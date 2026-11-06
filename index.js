import expresss from 'express';

const app = expresss();
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});