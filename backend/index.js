const express = require('express');
var cors = require('cors');
const { Client } = require('pg');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

const upload = multer({ storage: multer.memoryStorage() });

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

app.get('/profile/:id', (req, res) => {
    const id = req.params.id;

    const getProfile = 'SELECT surname, name, city, profession, email, vk, telegram, image, about FROM users WHERE user_id=$1';
    connection.query(getProfile, [id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            profile = result.rows[0];
            if (profile.image) {
                profile.image = `data:image/png;base64,${profile.image.toString('base64')}`;
            }

            res.json({ profile });
        }
    });
});

app.get('/subscribers/:id', (req, res) => {
    const id = req.params.id;
    
    switch (req.query.type) {
        case '?type=all': {
            const getUsers = `SELECT user_id, surname, name, city, image FROM users 
            WHERE surname IS NOT NULL AND surname != '' AND user_id != $1 ORDER BY surname ASC`;

            connection.query(getUsers, [id], (err, result) => {
                if (err) {
                    return res.send(err);
                } else {
                    const users = result.rows.map(user => {
                        if (user.image) {
                            // Создаем копию пользователя, чтобы не изменять исходный объект
                            return {
                                ...user,
                                image: `data:image/png;base64,${user.image.toString('base64')}`
                            };
                        };
                        
                        return user;
                    });

                    return res.json({ users });
                }
            });
            break;
        }

        case '?type=my':
            return res.json({
                users: [
                    { user_id: 3, surname: 'Unknown', name: 'Unknown', location: 'Not', image: null },
                    { user_id: 4, surname: 'Wow', name: 'wow', location: 'New-York', image: null }
                ]
            });

        case '?type=subscribers':
        default:
            return res.json({
                users: [
                    { user_id: 1, surname: 'Drozdov', name: 'Nikita', location: 'Smolensk', image: null },
                    { user_id: 2, surname: 'Surname', name: 'Name', location: 'Moscow', image: null },
                    { user_id: 5, surname: 'Smith', name: 'Bob', location: 'Paris', image: null }
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
            { id: 1, text: 'Hello', authorId: 2 },
            { id: 2, text: 'Hello! Hello!', authorId: 1 },
            { id: 3, text: 'How are you?', authorId: 1 }
        ]
    });
});

app.post('/register', async (req, res) => {
    const { login, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const insert = 'INSERT INTO users (login, hash_password) VALUES ($1, $2)';
    connection.query(insert, [login, hashPassword], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send('SUCCESS');
        }
    });
});

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    const auth = 'SELECT user_id, login, hash_password FROM users WHERE login=$1';
    connection.query(auth, [login], async (err, result) => {
        if (err) {
            res.send(err);
        } else {
            const data = result.rows[0];

            if (data) {
                const areSame = await bcrypt.compare(password, data.hash_password);

                if (areSame) {
                    res.send('SUCCESS');
                } else {
                    res.send('ERROR');
                }
            } else {
                res.send('ERROR');
            }
        }
    });
});

app.put('/editUser/:id', (req, res) => {
    const id = req.params.id;
    const { surname, name, city, profession, email, vk, telegram, about } = req.body;

    const update = 'UPDATE users SET surname=$1, name=$2, city=$3, profession=$4, email=$5, vk=$6, telegram=$7, about=$8 WHERE user_id=$9';
    connection.query(update, [surname, name, city, profession, email, vk, telegram, about, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send('SUCCESS');
        }
    });
});

app.put('/editProfilePhoto/:id', upload.single('avatar'), (req, res) => {
    const id = req.params.id;

    const update = 'UPDATE users SET image=$1 WHERE user_id=$2';
    connection.query(update, [req.file.buffer, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send('SUCCESS');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});