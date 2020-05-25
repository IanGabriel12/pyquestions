const express = require('express');
const router = express.Router();
const ChapterController = require('../src/controllers/ChapterController');

router.post('/', ChapterController.add);
router.get('/', ChapterController.getAll);
router.get('/:id', ChapterController.getOne);
router.put('/:id', ChapterController.edit);
router.delete('/:id', ChapterController.delete);


module.exports = router;