require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Velmora Travels API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
