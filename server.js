const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// TODO: Serve static files.
// Create directory, add an html, serve js from that html.
// In that js file, use `window` to grab necessary data.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
