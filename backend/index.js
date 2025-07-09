require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Transaction = require('./models/transactions'); 
const Account = require('./models/accounts'); 
const Investment = require('./models/investments');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
    // Adjust this to your frontend URL
}));

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API - server Updated");
});

app.get('/dashboard/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    }
    catch (error) {
        console.error("Error fetching transactions:", error);
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/dashboard/accounts', async (req, res) => {
    try {
        const accounts = await Account.find(); 
        res.status(200).json(accounts);
    }
    catch (error) {
        console.error("Error fetching accounts:", error);
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/dashboard/investments', async (req, res) => {
    try {
        const investments = await Investment.find();
        res.status(200).json(investments);
    }
    catch (error) {
        console.error("Error fetching investments:", error);
        return res.status(500).send("Internal Server Error");
    }
});

app.post('/dashboard/transactions', async(req, res) => {
    try {
        const transactionData = await Transaction.create(req.body);
        res.status(201).json(transactionData);
    } 
    catch (error) {
        console.error("Error creating transaction:", error);
        return res.status(500).send("Internal Server Error");
    }
});

app.post('/dashboard/accounts', async(req, res) => {
    try {
        const accounts = await Account.create(req.body);
        res.status(200).json(accounts);
    } 
    catch (error) {
        console.error("Error fetching accounts:", error);
        return res.status(500).send("Internal Server Error");
    }
});


app.post('/dashboard/investments', async (req, res) => {
    //try-catch block to handle errors
    try {
        const investments = await Investment.create(req.body);
        res.status(201).json(investments);
    } 
    catch (error) {
        console.error("Error fetching investments:", error);
        return res.status(500).send("Internal Server Error");
    }
});

mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
