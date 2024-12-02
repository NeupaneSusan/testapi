const express = require('express');
const auth_routes = require('./routes/auth');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/',auth_routes);



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });