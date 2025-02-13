import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import { routes } from './src/routes/routes';


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
const PORT = 4000;


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// routes
routes(app)

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);


app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
