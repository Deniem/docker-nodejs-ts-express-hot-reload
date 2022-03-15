import express from 'express';

// константы
const port = process.env.SERVER_PORT ?? 3000;
const host = process.env.SERVER_HOST ?? '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.json({msg: 'Hello, World!'});
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
