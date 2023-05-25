import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import axios from 'axios';
import { useState } from 'react';
console.log(styles);
const HealthGptChat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello! I'm HealthGPT, your source for health and fitness information.",
      sender: "gpt",
      direction: "incoming"
    }
  ])
  const [typing, setTyping] = useState(false)

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    setMessages([...messages, newMessage])

    setTyping(true)

    const response = await axios.post('http://localhost:4000/gpt', {
      chatMessages: [...messages, newMessage]
    });
    let gptResponse = {
      message: response.data.gptResponse.content,
      sender: "gpt",
      direction: "incoming"
    }
    setMessages([...messages, newMessage, gptResponse])
    setTyping(false)
  }
  return (
    <div className='w-4/12' style={{ height: '95vh', position: 'sticky', top: '1.5rem' }}>
      <MainContainer>
        <ChatContainer>
          <MessageList typingIndicator={typing ? <TypingIndicator content="HealthGPT is typing" /> : null}>
            {messages.map((message, i) => {
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder="Your Message Here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>

    </div >
  )
}

export default HealthGptChat