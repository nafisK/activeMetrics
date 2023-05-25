const express = require('express')
const router = express.Router()
const openaiApi = require('openai')
const dotenv = require('dotenv')
dotenv.config()

// init gpt config
const configuration = new openaiApi.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new openaiApi.OpenAIApi(configuration)

// post new gpt chat completion
router.post('/', async (req, res) => {
    try {
        const { chatMessages } = req.body
        const messages = prepareMessages(chatMessages)
        const completion = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: messages,
            max_tokens: 256,
        })
        res.status(200).json({
            gptResponse: completion.data.choices[0].message,
        })
    } catch (error) {
        console.log(error)
    }
})

// put received messages into the right format for gpt and add training message
function prepareMessages(chatMessages) {
    const systemMessage = {
        role: 'system',
        content:
            "You are HealthGPT. You will respond to user's health and fitness related questions. For any off topic questions, you will tell the user 'I am HealthGPT. That question is off topic.'",
    }

    let messages = []
    chatMessages.forEach(chatMessage => {
        let role
        if (chatMessage.sender == 'gpt') role = 'assistant'
        else role = 'user'
        let msg = {
            role: role,
            content: chatMessage.message,
        }
        messages.push(msg)
    })
    messages = [systemMessage, ...messages]
    return messages
}

module.exports = router
