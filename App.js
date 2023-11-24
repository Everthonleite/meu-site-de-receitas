const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Restante do código...

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));

// Rotas
const indexRouter = require('./src/routes/index');
const recipesRouter = require('./src/routes/recipes');

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);
 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
