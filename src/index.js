var express = require('express');
var exphbs = require('express-handlebars');
const path = require('path');


//Inicializaciones
const app = express();

//Configuraciones
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use(require('./routes/index'));

//Archivos
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('Server on port', 3000);
});