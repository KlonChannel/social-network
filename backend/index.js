const express = require('express');
var cors = require('cors');
const {Client} = require('pg');
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

const connection = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123',
    database: 'socialnetwork'
});

connection.connect().then(() => {
    console.log('Database is connected')
}).catch(() => {
    console.log('Some error with connection')
});

app.use(express.json());
app.use(cors(corsOptions));

app.get('/getUserId/:login', (req, res) => {
    const login = req.params.login;

    const getId = 'SELECT user_id FROM users WHERE login=$1';
    connection.query(getId, [login], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result.rows[0].user_id);
        }
    });
});

app.get('/profile', (req, res) => {
    res.json({
        profile: {
            id: 1,
            surname: 'Drozdov',
            name: 'Nikita',
            city: 'Moscow',
            profession: 'programmer',
            email: 'email@email.com',
            vk: 'https://vk.com/na.chille5',
            telegram: 'https://t.me/klonchannel',
            about: 'Hey! Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user.'
        }
    });
});

app.get('/subscribers', (req, res) => {
    switch (req.query.type) {
        case '?type=all':
            res.json({
                users: [
                    { id: 1, surname: 'Drozdov', name: 'Nikita', location: 'Smolensk' },
                    { id: 2, surname: 'Surname', name: 'Name', location: 'Moscow' },
                    { id: 3, surname: 'Unknown', name: 'Unknown', location: 'Not' },
                    { id: 4, surname: 'Wow', name: 'wow', location: 'New-York' },
                    { id: 5, surname: 'Smith', name: 'Bob', location: 'Paris' }
                ]
            });

        case '?type=my':
            res.json({
                users: [
                    { id: 3, surname: 'Unknown', name: 'Unknown', location: 'Not' },
                    { id: 4, surname: 'Wow', name: 'wow', location: 'New-York' }
                ]
            });

        case '?type=subscribers':
        default:
            res.json({
                users: [
                    { id: 1, surname: 'Drozdov', name: 'Nikita', location: 'Smolensk' },
                    { id: 2, surname: 'Surname', name: 'Name', location: 'Moscow' },
                    { id: 5, surname: 'Smith', name: 'Bob', location: 'Paris' }
                ]
            });

    }
});

app.get('/posts', (req, res) => {
    res.json({
        posts: [
            {
                id: 1, surname: 'Drozdov', name: 'Nikita', date: '1/01/2024',
                text: 'Spam: 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                likesCount: 0
            },
            {
                id: 2, surname: 'Borisov', name: 'Alex', date: '20/12/2024',
                text: 'Hello everyone!',
                likesCount: 3
            },
            {
                id: 3, surname: 'Surname', name: 'Name', date: '1/01/2025',
                text: 'Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!!',
                likesCount: 10
            },
            {
                id: 4, surname: 'Wow', name: 'Wow', date: '17/08/2025',
                text: 'New post text',
                likesCount: 1
            },
        ]
    });
});

app.get('/messages', (req, res) => {
    res.json({
        messages: [
            { id: 1, text: 'Hello', authorId: 2},
            { id: 2, text: 'Hello! Hello!', authorId: 1 },
            { id: 3, text: 'How are you?', authorId: 1 }
        ]
    });
});

app.post('/register', async (req, res) => {
    const {login, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const insert = 'INSERT INTO users (login, hash_password) VALUES ($1, $2)';
    connection.query(insert, [login, hashPassword], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send('SUCCESS');
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});