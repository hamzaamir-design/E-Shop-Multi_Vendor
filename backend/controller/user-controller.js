const express = require('express');
const path = require('path');
const User = require('../model/user-model');
const ErrorHandler = require('../utils/ErrorHandler');
const router = express.Router();
const { upload } = require('../multer');

// create user
router.post("/create-user", async (req, res, next) => {
    try {
        const { name, email, password, avatar } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl,
        };

        console.log(user);
  
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});

module.exports = router;