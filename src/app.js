const express = require('express');

const port = process.env.port || 9999;
const app = express();

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
})

app.use('/', (req, res) => {
    res.send('Welcome!');
});