import React, { useState, useEffect } from 'react';
import { app } from './Storage/Firebase';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

function Chatbot() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    const db = getDatabase(app); // app ko connect kro data base se app ke url and config part
    const messagesRef = ref(db, 'chat/messages');
    
    // Add user message to the database
    const newMessageRef = push(messagesRef);
    set(newMessageRef, { sender: 'user', text: inputValue });

    // Clear input field
    setInputValue('');

    // Generate a simple bot response
    const botMessageRef = push(messagesRef);
    set(botMessageRef, { sender: 'bot', text: generateBotResponse(inputValue) });
  };

  const generateBotResponse = (userMessage) => {
    // Simple example responses based on keywords
    if (userMessage.includes('hello')) return 'Hello! How can I help you today?';
    if (userMessage.includes('help')) return 'Sure, what do you need help with?';
    return "I'm here to chat with you!";
  };

  useEffect(() => {
    const db = getDatabase(app);
    const messagesRef = ref(db, 'chat/messages');
    
    // Listen for real-time updates to messages
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const chatHistory = data ? Object.values(data) : [];
      setMessages(chatHistory);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Chatbot</h1>
      
      <div className="chat-log">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a message"
        className="border p-2 rounded"
      />
      <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
}

export default Chatbot;
