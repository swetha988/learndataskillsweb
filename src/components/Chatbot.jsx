import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToAI } from '../services/aiService';
import { trackEvent } from '../utils/analytics';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your AI Data Mentor. I can help you with SQL, Python, Excel, or any questions about the courses. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);



  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError('');
    
    // Add user message optimistically
    const currentHistory = [...messages];
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const responseContent = await sendMessageToAI(currentHistory, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your API key.');
      setMessages(currentHistory); // Revert on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent('chatbot_opened');
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <Sparkles size={18} style={{ color: '#EAB308' }} />
              <span>AI Mentor</span>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message-bubble ${msg.role === 'user' ? 'user' : 'assistant'}`}>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message-bubble assistant is-loading">
                <Loader2 size={16} className="spin" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} /> 
                Thinking...
              </div>
            )}
            {error && (
              <div className="chatbot-error">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <button type="submit" disabled={!input.trim() || isLoading} className="chatbot-send-btn">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-fab" onClick={handleOpen}>
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}