const express = require('express');
const {validationResult, check} = require('express-validator');
const router = express.Router();

const auth = require('../../middleware/auth');
const Task = require('../../models/Task');
const { find } = require('../../models/Task');
const checkID = require('../../middleware/checkID');


// @route   POST api/tasks
// @desc    Create task 
// @access  Private
router.post('/', 
[
    auth, 
    [
       check('title', 'Task is required').not().isEmpty() 
    ]
], 
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {title, urgent, completed} = req.body

    try {
        const task = new Task({
        title,
        urgent,
        completed,
        user: req.user.id

        })

     await task.save();

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

    
});

// @route   GET api/tasks/me
// @desc    Get logged in user's tasks 
// @access  Private

router.get('/me', auth, async (req, res) => {

    try {

        const tasks = await Task.find({user: req.user.id}).sort({date: -1});
        res.json(tasks)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// @route   GET api/tasks/id
// @desc    Get logged in user's tasks 
// @access  Private

router.get('/:id', auth, async (req, res) => {

    try {
        const id = await req.params.id;

        // Find record 
       const task = await Task.findById(id);
       res.json(task)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// @route   PUT api/tasks/id
// @desc    UPDATE task 
// @access  Private
router.put('/:id', [
    auth, 
    [
       check('title', 'Task is required').not().isEmpty() 
    ]
], async (req, res) => {
    
    try {
    const id = await req.params.id;

    const {title, urgent, completed} = req.body
    // Find record and modify 
    res.json(await Task.updateOne({_id: id}, {title: title, urgent: urgent, completed: completed, user: req.user.id}));
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})



// @route   DELETE api/tasks
// @desc    Delete task 
// @access  Private

router.delete('/:id', auth, async (req, res) => {
    try {
        const id = await req.params.id;
        // Find record and delete
       const task = await Task.findById(id);
        await task.remove()
        res.status(200).send('Task deleted')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }
})



module.exports = router;