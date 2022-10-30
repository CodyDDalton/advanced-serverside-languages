const express = require("express");
const app = express();

// GET / HTTP/1.1
app.post('/', (req, res) => {
    res.status(200),json({
        "first-name":"Cody",
        "last-name":"Dalton",
        "email":"cddalton@student.fullsail.edu",
        "request-token":"ASL-442"
    })
});

app.listen(3000)