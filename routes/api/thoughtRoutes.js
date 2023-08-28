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

// Add a reaction         /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// delete a reaction         /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
