const express = require('express')
const Exercise = require('../models/exerciseModel')
const router = express.Router()

/**
 * Post
 * Get by All User ID (Test)
 * Get by User ID and Day (Main)
 * Delete by ID
 * Update by ID
 */

// post new exercise
router.post('/', async (req, res) => {
    try {
        const exerciseData = {
            ...req.body,
            day: new Date(req.body.date).setUTCHours(0, 0, 0, 0),
        }
        const exercise = await Exercise.create(exerciseData)
        res.status(200).json(exercise)
    } catch (error) {
        console.log('⚠️ Exercise Post Bad Request', error.message)
        res.status(400).send({
            error: `⚠️ Exercise Post Bad Request: ${error.message}`,
        })
    }
})

// get all exercises for a user
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const exercises = await Exercise.find({ user_id: userId })
        res.status(200).json(exercises)
    } catch (error) {
        console.log('⚠️ Exercise Get Bad Request for User ID', error.message)
        res.status(400).send({
            error: `⚠️ Exercise Get Bad Request for User ID: ${error.message}`,
        })
    }
})

// get all exercises for a user on a specific day
router.get('/:id/:date', async (req, res) => {
    try {
        const userId = req.params.id
        const targetDate = new Date(req.params.date)
        const startOfDay = new Date(targetDate).setUTCHours(0, 0, 0, 0)
        const endOfDay = new Date(targetDate).setUTCHours(23, 59, 59, 999)

        const exercises = await Exercise.find({
            user_id: userId,
            date: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
        })

        res.status(200).json(exercises)
    } catch (error) {
        console.log(
            '⚠️ Exercise Get Bad Request for User ID and Day',
            error.message
        )
        res.status(400).send({
            error: `⚠️ Exercise Get Bad Request for User ID and Day: ${error.message}`,
        })
    }
})

// delete exercise by id
router.delete('/:exerciseId', async (req, res) => {
    try {
        const exerciseId = req.params.exerciseId
        const exercise = await Exercise.findByIdAndDelete(exerciseId)
        if (exercise) {
            res.status(200).send({ message: 'Exercise deleted successfully' })
        } else {
            res.status(404).send({
                error: '⚠️ Exercise not found in Database to be Deleted',
            })
        }
    } catch (error) {
        console.log('⚠️ Exercise Delete Bad Request by ID', error.message)
        res.status(400).send({
            error: `⚠️ Exercise Delete Bad Request by ID: ${error.message}`,
        })
    }
})

module.exports = router
