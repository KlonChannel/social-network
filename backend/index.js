const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({
        message: "Backend and Frontend is connected!"
    });
});