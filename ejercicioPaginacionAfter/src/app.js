import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

try {
    await mongoose.connect('mongodb+srv://garrocp:q1O30k8oOllXEnZP@cluster0.kuexwfq.mongodb.net/users');
    console.log("DB conectada")
} catch (error) {
    console.log(error);
}

app.listen(8080, () => console.log('Server running on port 8080'));