const express = require('express');
const router = express.Router();
const QuestionsController = require('../src/controllers/QuestionsController');

router.get('/', QuestionsController.getAll);
router.post('/', QuestionsController.add);

router.get('/:id', QuestionsController.getOne);
router.put('/:id', QuestionsController.edit);
router.delete('/:id', QuestionsController.delete);

module.exports = router;