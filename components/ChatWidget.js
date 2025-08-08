import { useState } from 'react';
import { sendChatMessage } from '../utils/email';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Apple Support. How can I help you with your gift card today?",
      sender: "support",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    if (newMessage.trim() && !isSending) {
      setIsSending(true);
      
      const userMessage = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      const messageToSend = newMessage;
      setNewMessage('');
      
      try {
        // Send message to email
        await sendChatMessage(messageToSend, 'customer@unknown.com');
        
        // Auto-reply after successful send
        setTimeout(() => {
          const supportReply = {
            id: Date.now() + 1,
            text: "Thank you for your message. Our support team has received your inquiry and will get back to you shortly. Is there anything else I can help you with?",
            sender: "support",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, supportReply]);
        }, 1500);
        
      } catch (error) {
        console.error('Failed to send chat message:', error);
        // Still show reply even if email fails
        setTimeout(() => {
          const supportReply = {
            id: Date.now() + 1,
            text: "Thank you for your message. We'll make sure to get back to you soon. Is there anything else I can help you with?",
            sender: "support",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, supportReply]);
        }, 1500);
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0, 113, 227, 0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '350px',
            height: '500px',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
              color: 'white',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4CAF50',
                  animation: 'blink 1.5s infinite'
                }}
              ></div>
              <span style={{ fontWeight: 'bold' }}>Apple Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              background: '#f8f9fa'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: message.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: message.sender === 'user' ? '#0071e3' : '#fff',
                    color: message.sender === 'user' ? 'white' : '#333',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                >
                  <div>{message.text}</div>
                  <div
                    style={{
                      fontSize: '11px',
                      opacity: 0.7,
                      marginTop: '4px',
                      textAlign: 'right'
                    }}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '16px',
              background: '#fff',
              borderTop: '1px solid #e0e0e0'
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '20px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              
              <button
                onClick={sendMessage}
                disabled={isSending || !newMessage.trim()}
                style={{
                  background: (isSending || !newMessage.trim()) ? '#ccc' : '#0071e3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: (isSending || !newMessage.trim()) ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}
              >
                {isSending ? '...' : '➤'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 20px rgba(0, 113, 227, 0.3);
          }
          50% {
            box-shadow: 0 4px 25px rgba(0, 113, 227, 0.5);
          }
          100% {
            box-shadow: 0 4px 20px rgba(0, 113, 227, 0.3);
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
}
