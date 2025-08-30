const {User} = require('../models/User');

//routes handler function.
exports.createUser = async (req, res) => {
    try {
        const { username,phone, email,password } = req.body;
        const newUser = new User({ username, phone, email, password });
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists, Try with different email' });
        }
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }   
        res.status(200).json({user: user});
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

//find user by id
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }  }