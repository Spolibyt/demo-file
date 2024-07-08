const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Here, you can save the data to a database or send an email
    res.send('Message received!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
