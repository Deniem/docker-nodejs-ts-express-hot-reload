import express from 'express';

const port = process.env.SERVER_PORT ?? 3000;
const host = process.env.SERVER_HOST ?? '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.json({msg: 'Hello, World!'});
});

app.listen(port, host, function() {
  const {address: realHost, port: realPort} = this.address();
  console.log(`running on http://${realHost}:${realPort}`);
});

