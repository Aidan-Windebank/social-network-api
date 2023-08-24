const router = require('express').Router();

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// Get all thoughts       /api/thoughts
router.route('/').get(getThoughts);

// Get thought by id       /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);

// Post a new thought      /api/thoughts
router.route('/').post(createThought);

// Update thought by Id    /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThoughtById);

// Delete thought by Id    /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);



module.exports = router;


// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value