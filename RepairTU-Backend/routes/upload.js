const express = require('express');
const UploadM = require('../models/upload');
const authenticateToken = require('./authenticateToken');
const multer = require('multer')
const fs = require('fs');
const path = require('path');
const router = express();

//multer config
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './repairtuImage');
    },
    filename: function (req, file, callback) {
        // const fileName = file.originalname
        // let dotIndex = fileName.indexOf(".");
        // let subString = fileName.substring(0, dotIndex);
        // let fileType = "."+fileName.substring(dotIndex+1);
        // const newFilename = subString + "_" + req.user.userId+ fileType;
        // req.savedFileName = newFilename;
        const originalName = file.originalname;
        const fileExtension = path.extname(originalName);
        const baseName = path.basename(originalName, fileExtension);
        let newFilename = baseName + "_" + req.user.userId + fileExtension;
        let count = 1;

        const checkFileExist = (fileName) => {
            const filePath = path.join(__dirname, '../repairtuImage', fileName);
            return fs.existsSync(filePath);
        }

        while(checkFileExist(newFilename)) {
            newFilename = baseName + "_" + req.user.userId + `(${count})` + fileExtension;
            count++;
        }

        // console.log(newFilename);
        req.imagePath = path.join('repairtuImage', newFilename);
        callback(null, newFilename);
    }
})

const upload = multer({ storage });

//insert request json from frontend to database
// upload.array('name must be match with frontend name')
router.post('/upload', authenticateToken, upload.array('image'), async (req, res) => {
    req.body.userId = req.user.userId;
    req.body.username = req.user.username;
    req.body.image_path = req.imagePath;
    const request = req.body;
    // console.log(request);
    try {
        const insertData = await UploadM.insertMany(request);
        console.log("insertData Success\n"+insertData);
        res.status(201).json({ message: "success"});
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})

router.get('/upload', async (req, res) => {
    try {
        const requests = await UploadM.find();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/upload/login', authenticateToken, (req, res) => {
    res.json(req.user);
})

router.get('/upload/image/:id', (req, res) => {
    res.render('/repairtuImage'+id);
})

module.exports = router;