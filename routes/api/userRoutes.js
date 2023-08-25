const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Get all users        /api/users
router.route('/').get(getUsers);

// Get user by id       /api/users/:userId
router.route('/:userId').get(getUserById);

// Post a new user      /api/users
router.route('/').post(createUser);

// Update user by Id    /api/users/:userId
router.route('/:userId').put(updateUserById);

// Delete user by Id    /api/users/:userId
router.route('/:userId').delete(deleteUser);

// Add a friend         /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// delete a friend         /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;


// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list