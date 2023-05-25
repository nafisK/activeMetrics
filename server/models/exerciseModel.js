const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        exercise_name: {
            type: String,
            required: true,
        },
        exercise_type: {
            type: String,
            enum: ['weight_lifting', 'cardio'],
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        sets: {
            type: Number,
            default: null,
        },
        reps: {
            type: Number,
            default: null,
        },
        weight: {
            type: Number,
            default: null,
        },
        duration: {
            type: Number,
            default: null,
        },
        distance: {
            type: Number,
            default: null,
        },
    },
    {
        timestamps: true,
    }
)

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise
