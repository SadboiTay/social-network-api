const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//  /api/thoughts
router 
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

//  /api/thoughts/:id
router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought);
    
//  /api/thoughts/:thoughtid/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

//  /api/thoughts/:thoughtid/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;