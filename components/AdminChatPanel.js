import { useState, useEffect } from 'react';

export default function AdminChatPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chatSessions, setChatSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [adminReply, setAdminReply] = useState('');

  // Simple admin authentication (you can make this more secure)
  const ADMIN_KEY = 'ADMIN_APPLE_2025'; // Change this to your secure key

  const authenticateAdmin = () => {
    if (adminKey === ADMIN_KEY) {
      setIsAuthenticated(true);
      setAdminKey('');
    } else {
      alert('Invalid admin key');
    }
  };

  const sendAdminReply = async () => {
    if (!adminReply.trim() || !selectedSession) return;

    // Here you would typically send the reply through your backend
    // For now, we'll just simulate it
    const newReply = {
      id: Date.now(),
      message: adminReply,
      timestamp: new Date().toLocaleString(),
      isAdmin: true
    };

    // Update the session with the reply
    setChatSessions(prev => 
      prev.map(session => 
        session.id === selectedSession.id 
          ? { ...session, messages: [...session.messages, newReply] }
          : session
      )
    );

    setAdminReply('');
    alert('Reply sent successfully!');
  };

  // Show admin panel only when Ctrl+Alt+A is pressed
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '80%',
        overflow: 'auto'
      }}>
        {!isAuthenticated ? (
          // Admin Login
          <div>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Admin Panel Login</h2>
            <input
              type="password"
              placeholder="Enter admin key"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && authenticateAdmin()}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                marginBottom: '12px',
                fontSize: '16px'
              }}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={authenticateAdmin}
                style={{
                  background: '#0071e3',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
              <button
                onClick={() => setIsVisible(false)}
                style={{
                  background: '#f0f0f0',
                  color: '#333',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // Admin Dashboard
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: '#333', margin: 0 }}>Chat Admin Panel</h2>
              <button
                onClick={() => {
                  setIsVisible(false);
                  setIsAuthenticated(false);
                }}
                style={{
                  background: '#f0f0f0',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>

            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 12px 0', color: '#666' }}>How to Respond to Users:</h3>
              <ol style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                <li>Users send messages via the chat widget on your website</li>
                <li>All messages are automatically sent to your email (template_jrao90f)</li>
                <li>To respond, simply reply to the email - your response will reach the customer</li>
                <li>You can also use this panel for quick responses (feature coming soon)</li>
              </ol>
            </div>

            <div style={{ background: '#e8f4fd', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0071e3' }}>📧 Current Setup:</h4>
              <p style={{ margin: '0', color: '#333' }}>
                <strong>Email Template:</strong> template_jrao90f<br/>
                <strong>Image Support:</strong> Up to 1MB images included in emails<br/>
                <strong>Admin Key:</strong> Press Ctrl+Alt+A to access this panel
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
