const espress = require('express');
//usando sintaxis de desestructuracion
const {engine}=require('express-handlebars');
const myconnection=require('express-myconnection');
const bodyParser=require('body-parser');
const mysql=require('mysqli2');
const tasksRoutes = require('./routes/tasks')

const app=express();
app.set('port', 3000);

app.use(bodyParser.urlencoded({ 
    extended: true

}));
    
app.use(bodyParser.json());

app.listen(app.get('port'),()=>{
    console.log('Escuchando en el puerto',app.get('port'));
});

app.use(myconnection(mysql,{
    host:'localhost',
    user: 'LAPTOP-DCH520NH\SQLEXPRESS',
    password: '',
    port: 33321,
    database: 'crud_db'

},'single'))

app.set('views', _dirname+'/views');
app.engine('.hbs', engine({
    extname:'.hbs',
}))
app.set('view engine', 'hbs');

app.use('/', tasksRoutes);

app.get('/',(req,res)=>{
    res.render('index')
})