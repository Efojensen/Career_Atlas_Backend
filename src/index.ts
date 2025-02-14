import express from 'express';
import users from './routers/users';
import employers from './routers/employers';

const app = express();
app.use(express.json());
app.use('/user', users);
app.use('/emp', employers)

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})

app.listen(3000, () => {
    console.log('Server running on localhost:3000')
})