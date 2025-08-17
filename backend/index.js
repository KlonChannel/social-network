const express = require('express');
var cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

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
                    { id: 4, surname: 'Wow', name: 'wow', location: 'New-York' }
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
                    { id: 2, surname: 'Surname', name: 'Name', location: 'Moscow' }
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

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});