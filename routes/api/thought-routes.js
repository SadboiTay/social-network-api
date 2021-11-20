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
    .put(createReaction)
    .delete(deleteReaction);

module.exports = router;