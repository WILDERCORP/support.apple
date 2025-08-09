import { useState } from 'react';
import { sendAdminResponse } from '../utils/email';

export default function AdminChat() {
  const [customerEmail, setCustomerEmail] = useState('');
  const [adminResponse, setAdminResponse] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [lastSent, setLastSent] = useState(null);

  const sendResponse = async () => {
    if (!customerEmail.trim() || !adminResponse.trim()) {
      alert('Please enter both customer email and your response');
      return;
    }

    setIsSending(true);
    try {
      // Send admin response using dedicated function
      await sendAdminResponse(adminResponse, customerEmail.trim());
      
      setLastSent({
        email: customerEmail,
        message: adminResponse,
        time: new Date().toLocaleString()
      });
      
      // Clear form
      setAdminResponse('');
      alert('Response sent successfully!');
      
    } catch (error) {
      console.error('Failed to send response:', error);
      alert('Failed to send response. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>🍎 Apple Support - Admin Response</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>
          Respond to customer messages from your support chat
        </p>
      </div>

      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>📋 How to Respond:</h3>
        <ol style={{ color: '#666', lineHeight: '1.6' }}>
          <li>When you receive a customer message in your email, copy their email address</li>
          <li>Paste it in the "Customer Email" field below</li>
          <li>Type your response in the message box</li>
          <li>Click "Send Response" - it will be emailed to the customer</li>
        </ol>
      </div>

      <div style={{ 
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Customer Email Address:
          </label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="customer@example.com"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Your Response:
          </label>
          <textarea
            value={adminResponse}
            onChange={(e) => setAdminResponse(e.target.value)}
            placeholder="Type your response to the customer here..."
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              resize: 'vertical',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <button
          onClick={sendResponse}
          disabled={isSending || !customerEmail.trim() || !adminResponse.trim()}
          style={{
            background: isSending ? '#ccc' : '#0071e3',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isSending ? 'not-allowed' : 'pointer',
            width: '100%'
          }}
        >
          {isSending ? 'Sending Response...' : 'Send Response to Customer'}
        </button>
      </div>

      {lastSent && (
        <div style={{
          background: '#d4edda',
          border: '1px solid #c3e6cb',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#155724' }}>✅ Last Response Sent:</h4>
          <p style={{ margin: '5px 0', color: '#155724' }}>
            <strong>To:</strong> {lastSent.email}
          </p>
          <p style={{ margin: '5px 0', color: '#155724' }}>
            <strong>Message:</strong> {lastSent.message}
          </p>
          <p style={{ margin: '5px 0', color: '#155724' }}>
            <strong>Sent:</strong> {lastSent.time}
          </p>
        </div>
      )}

      <div style={{
        background: '#fff3cd',
        border: '1px solid #ffeaa7',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#856404' }}>💡 Quick Response Templates:</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={() => setAdminResponse("Thank you for contacting Apple Support. I've checked your gift card status and here's what I found: [Add specific details]. Is there anything else I can help you with?")}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '6px',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px'
            }}
          >
            📄 Gift Card Status Update Template
          </button>
          <button
            onClick={() => setAdminResponse("I understand your concern with the gift card PIN. I've generated a new PIN for your card. Your new PIN is: [PIN]. Please try using this PIN and let me know if you need further assistance.")}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '6px',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px'
            }}
          >
            🔑 PIN Issue Resolution Template
          </button>
          <button
            onClick={() => setAdminResponse("Your refund request has been approved. You can expect to see the refund in your original payment method within 3-5 business days. Reference number: [REF]. Thank you for choosing Apple.")}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '6px',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px'
            }}
          >
            💰 Refund Approval Template
          </button>
        </div>
      </div>
    </div>
  );
}
