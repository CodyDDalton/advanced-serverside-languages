const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require('./routes/Products');
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

app.get('/', (req, res) => {
    res.render("home", { name: "Cody", "users":[
        { name:'Cody Dalton', email:'cddalton@student.fullsail.edu'},
        { name:'Norm Alperson', email:'nalperson@fullsail.edu'},
        { name:'Susan Snapple', email:'snapitup48@yahoo.com'}
    ]})
})

app.use("/products", productRouter);

app.listen(3000)