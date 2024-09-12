const express = require('express');
const hbs = require('hbs'); 
const app = express();
app.set('view engine', 'hbs'); 

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//helper para letras en minusculas
hbs.registerHelper('lowercase', function (text) {
  return text.toLowerCase();
});
app.get('/', (req, res) => {
    const param = req.body;
    res.render('index'); 

});
app.post('/login', (req, res) => {
    const param = req.body;
    console.log('Login:', param);
    res.render('vista', {userData: param,
        productos: [{
            nombre: 'banana' 
        },
        {
            nombre: 'cebollas'  
        },{
            nombre: 'lechuga'
        },{
            nombre: 'papas'
        },{
            nombre: 'pimenton' 
        },{
            nombre: 'tomate' 
        }]
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});