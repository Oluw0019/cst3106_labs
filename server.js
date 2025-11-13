const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static('.'));

// Simple dice endpoint
app.get('/roll-dices', (req, res) => {
    const dice = [];
    for (let i = 0; i < 5; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log('🎲 Server rolled dice:', dice);
    res.json({ dice: dice });
});

// Root route
app.get('/', (req, res) => {
    res.send('The server is finally working 😭😭😭. Go to <a href="yatzy.html">it</a>');
});

app.listen(PORT, () => {
    console.log(`🎯 Express server running on http://localhost:${PORT}`);
    console.log(`🎮 Game: http://localhost:${PORT}/yatzy.html`);
    console.log(`🎲 Dice API: http://localhost:${PORT}/roll-dices`);
});