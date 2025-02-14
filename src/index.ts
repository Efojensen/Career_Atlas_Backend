import express from 'express';
import users from './routers/users';

const app = express();
app.use(express.json());
app.use('/users', users);

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})

app.listen(3000, () => {
    console.log('Server running on localhost:3000')
})