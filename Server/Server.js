const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("Invalid Email or Password");

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send("Invalid Email or Password");

        const token = jwt.sign({ _id: user._id }, "secretKey", { expiresIn: "1h" });
        res.send({ message: "Login Successful", token });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// Sign-Up Route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.send("User Registered Successfully");
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// Server Setup
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
