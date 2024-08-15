var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db= require('./config/database');


const userRouter = require('./routes/userRouter');
const contractsRouter = require('./routes/contractRouter');
const claimRouter = require('./routes/claimRouter');
const documentRouter = require('./routes/documentRouter');
const interactionRouter = require('./routes/interactionRouter');
const requiredDocumentRouter = require('./routes/requiredDocumentRouter');
const taskRouter = require('./routes/taskRouter');

const app = express();

const PORT  = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());

// Database connection
(async function initializeDatabase() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
app.use('/', userRouter);
app.use('/', contractsRouter);
app.use('/', claimRouter);
app.use('/', documentRouter);
app.use('/', interactionRouter);
app.use('/', requiredDocumentRouter);
app.use('/', taskRouter);
app.get('/', (req, res)=> {
  res.send('hello there')
});







app.listen(PORT,  ()=> {console.log('Listening on port ' + PORT + '...')});



module.exports = app;
