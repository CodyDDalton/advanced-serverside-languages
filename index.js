const express = require("express");
const app = express();

//GET all products - by page, sort, and order parameters
app.get("/products/all/:page-:sort-:order", (req, res) => {
    res.send(
        "GET Products: "+req.params.page+","+req.params.sort+","+req.params.order
        )
});

//GET product - by id, size, and color parameters
app.get("/products/:id-:size-:color", (req, res) => {
    res.send(
        "GET Products: "+req.params.id+","+req.params.size+","+req.params.color
        )
});

//GET product - by id
app.get('/products/:id', (req, res) => {
    res.send(
        "GET Products: "+req.params.id
    )
});

//Listen on port 3000
app.listen(3000)