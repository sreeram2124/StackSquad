const express = require('express');
const router = express.Router();
const multer = require('multer');
const memberController = require('../controllers/memberController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'image' }, { name: 'file' }]), memberController.addMember);
router.get('/', memberController.getMembers);
router.get('/:id', memberController.getMemberById);

module.exports = router;