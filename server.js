const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    const obj = {
        ipaddress: null,
        language: null,
        platform: process.platform
    };
    res.send(''+location.host);
    res.send(''+location.hostname);
    res.send(JSON.stringify(obj));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
