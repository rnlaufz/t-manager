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
// @route   GET api/tasks/completed
// @desc    Get logged in user's completed tasks 
// @access  Private

router.get('/completed', auth, async (req, res) => {

    try {
        // Get all current user's completed tasks
        const tasks = await Task.find({user: req.user.id, completed: true}).sort({date: -1});
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

// @route   POST api/tasks/id
// @desc    UPDATE task 
// @access  Private
router.post('/update', [
    auth, 
    [
       check('title', 'Task is required').not().isEmpty() 
    ]
], async (req, res) => {
    
    try {
    const {title, urgent, completed} = await req.body
    // Find record and modify 
    let task = await Task.updateOne({_id: req.body._id}, {title: title, urgent: urgent, completed: false, user: req.user.id});
    return res.json(task)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})
// @route   POST api/tasks/id
// @desc    UPDATE task | mark it completed
// @access  Private
router.post('/:id', [
    auth, 
    [
       check('title', 'Task is required').not().isEmpty() 
    ]
], async (req, res) => {
    
    
    try {
        const id = await req.params.id;
        let task = await Task.updateOne({_id: id}, {$set:{completed: true}}) 
        return res.json(task)

    // const {title, urgent, completed} = req.body
    // // Find record and modify 
    // let task = await Task.updateOne({_id: req.body._id}, {title: title, urgent: urgent, completed: false, user: req.user.id});
    // return res.json(task)
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
// @route   DELETE api/tasks
// @desc    Delete all user's tasks
// @access  Private

router.delete('/', auth, async (req, res) => {
    try {
        const user = req.user.id;
        // Find record and delete
       const tasks = await Task.deleteMany({user: user});
        res.status(200).send('Tasks deleted')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }
})



module.exports = router;