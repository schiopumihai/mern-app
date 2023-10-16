const express = require('express');
const { logEvents } = require('./logEvents');

const app = express();
const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
  logEvents(`${req.method} ${req.path}`);
  next();
});

app.get('/', (req, resp) => {
  resp.send('hello');
});

app.get('/test', (req, resp) => {
  resp.send(JSON.stringify({"key": "value"}));
});


app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});