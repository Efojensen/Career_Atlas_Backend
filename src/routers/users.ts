import { Router } from 'express'

const router = Router();

const users = [
    {
        name: 'Jensen',
        age: 20
    },
    {
        name: 'Alice',
        age: 19
    },
    {
        name: 'Mike',
        age: 21
    },
    {
        name: 'Mia',
        age: 22
    },
]

router.get('/', (req, res) => {
    res.status(200).json({
        users: users
    })
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    res.status(200).send(`Retrieving user with id: ${id}`)
});

router.post('/new', (req, res) => {
    const newUser = req.body;
    users.push(newUser)
    res.status(201).json({
        users: users
    })
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    users.splice(id, 1)
    res.status(201).json({
        users: users
    });
});

router.patch('/:id', (req, res) => {
    const updated = req.body
    const id = Number(req.params.id);
    users[id]
})

export default router;