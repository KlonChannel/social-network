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

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});