const express = require('express');
const router = express.Router(); // ใช้ express.Router()
const UploadM = require('./models/UploadM'); // ตรวจสอบว่า UploadM ได้ถูก import มาอย่างถูกต้อง

router.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await UploadM.findOne({ _id: userId }); // ค้นหาข้อมูลผู้ใช้โดยใช้ _id
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // ส่งข้อมูลผู้ใช้กลับไปหากพบ
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
