const express = require('express'); 
const path = require('path');

const app = express(); 

app.getMaxListeners("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
})

const port = process.eventNames.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})