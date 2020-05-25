var express = require('express');
var router = express.Router();
var ChapterController = require('../src/controllers/ChapterController');

router.post('/', ChapterController.add);
router.get('/', ChapterController.getAll);
router.get('/:id', ChapterController.getOne);
router.put('/:id', ChapterController.edit);
router.delete('/:id', ChapterController.delete);


module.exports = router;