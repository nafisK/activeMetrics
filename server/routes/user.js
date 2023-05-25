const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const router = express.Router()

/**
 * Create
 * Post
 * Get All (for testing)
 * Get by ID
 * Delete by ID
 * Update by ID
 */

// create new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        // Exclude the password from the response
        const responseUser = { ...user._doc, password: undefined }
        res.status(200).json(responseUser)
    } catch (error) {
        console.log('⚠️ User Post Bad Request', error.message)
        res.status(400).send({
            error: `⚠️ User Post Bad Request: ${error.message}`,
        })
    }
})

// login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.status(400).json({ error: 'Email is required' })
        if (!password)
            return res.status(400).json({ error: 'Password is required' })

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ error: 'User does not exit' })
        }

        const isPasswordValid = await user.checkPassword(password)
        console.log(`isPasswordValid: ${isPasswordValid}`)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' })
        }

        // session token code would go here

        res.status(200).json({ message: 'Login successful', user: user })
    } catch (error) {
        console.error('⚠️ Login error:', error.message)
        res.status(500).json({ error: '⚠️ Server error' })
    }
})

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log('⚠️ User Get Bad Request', error.message)
        res.status(400).send({
            error: `⚠️ User Get Bad Request: ${error.message}`,
        })
    }
})

// get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send({ error: 'User not found in Database to Get' })
        }
    } catch (error) {
        console.log('⚠️ User Get Bad Request by ID', error.message)
        res.status(400).send({
            error: `⚠️ User Get Bad Request by ID: ${error.message}`,
        })
    }
})

// delete user by id
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (user) {
            res.status(200).send({ message: 'User deleted successfully' })
        } else {
            res.status(404).send({
                error: 'User not found in Database to be Deleted',
            })
        }
    } catch (error) {
        console.log('⚠️ User Delete Bad Request by ID', error.message)
        res.status(400).send({
            error: `⚠️ User Delete Bad Request by ID: ${error.message}`,
        })
    }
})

// update user by id
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send({
                error: 'User not found in Database to be Updated',
            })
        }
    } catch (error) {
        console.log('⚠️ User Put Bad Request by ID', error.message)
        res.status(400).send({
            error: `⚠️ User Put Bad Request by ID: ${error.message}`,
        })
    }
})

module.exports = router
