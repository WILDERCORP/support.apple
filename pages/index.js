import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';

export default function Home() {
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
      <header>
        <Navbar className="custom-navbar" variant="light" expand="lg">
          <Container fluid>
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

      {/* Body */}
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
        {/* Top row: heading left, icons right */}
  <div className="giftcard-row-no-padding">
          {/* Left: Heading */}
          <div className="giftcard-heading-col-no-padding">
            <h1 className="giftcard-heading" style={{ fontWeight: 'bold', marginBottom: 0, textAlign: 'left' }}>Apple gift card</h1>
          </div>
          {/* Right: Arrow Down Icon and Buy Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div className="arrow-buy-row" style={{ display: 'flex', alignItems: 'center', gap: '2rem' , padding: '15px' }}>
              <i className="bi bi-arrow-down"></i>
              <Link href="/about" passHref legacyBehavior>
                <button className="buy-btn">Buy</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Divider: full width */}
        <hr style={{ width: '100%', margin: 0, borderTop: '1.5px solid #ddd' }} />
        {/* Centered bold text and subtext below divider */}
        <div
          style={{
            width: '100%',
            padding: '2.5rem 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.7rem',
              textAlign: 'center',
              marginBottom: '2.5rem',
              width: '100%',
              maxWidth: '900px',
            }}
          >
            Check your apple giftcard balance
          </span>
          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              marginBottom: '2.5rem',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#333', fontSize: '1.1rem', fontWeight: 400 }}>
              If you have already redeemed an Apple<br />
              Gift Card, App Store Card, or App Store &<br />
              iTunes Gift Card, you can check your<br />
              Apple Account balance.
            </span>
          </div>
          {/* New heading */}
          <h2
            style={{
              fontWeight: 'bold',
              fontSize: '1.3rem',
              textAlign: 'center',
              margin: 0,
              marginBottom: '2.5rem',
              width: '100%',
              maxWidth: '900px',
            }}
          >
            Check the balance of your gift card
          </h2>
          {/* Wide blue button */}
          <Link href="/about" passHref legacyBehavior>
            <button
              style={{
                width: '100%',
                maxWidth: '400px',
                background: '#0071e3',
                color: '#fff',
                border: 'none',
                borderRadius: '26px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                padding: '0.9rem 0',
                cursor: 'pointer',
                textAlign: 'center',
                marginBottom: '2.5rem',
              }}
            >
              See the balance of your gift card
            </button>
          </Link>
          {/* Published Date - left aligned to main content and same margin as Helpful? */}
          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '2rem auto 0 auto',
              color: '#666',
              fontSize: '1rem',
              textAlign: 'left',
              paddingLeft: '0.5rem'
            }}
          >
            {`Published Date: ${new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}`}
          </div>
        </div>

        {/* Spacer to push bottom elements down */}
        <div style={{ flex: 1 }}></div>

        {/* Full-width horizontal divider */}
        <hr style={{
          width: '100vw',
          margin: '0',
          borderTop: '1.5px solid #ddd',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)'
        }} />

        {/* Helpful? section - left aligned to main content */}
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            margin: '1.5rem auto 0 auto',
            paddingBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.75rem',
            paddingLeft: '0.5rem'
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: '0.98rem', color: '#222', marginRight: '0.7rem' }}>
            Helpful?
          </span>
          <Link href="/about" passHref legacyBehavior>
            <button
              style={{
                border: '2px solid #0071e3',
                background: '#fff',
                color: '#222',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                borderRadius: '26px',
                padding: '0.3rem 1.1rem',
                cursor: 'pointer',
                marginRight: '0.5rem'
              }}
            >
              Yes
            </button>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <button
              style={{
                border: '2px solid #0071e3',
                background: '#fff',
                color: '#222',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                borderRadius: '26px',
                padding: '0.3rem 1.1rem',
                cursor: 'pointer'
              }}
            >
              No
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100vw',
          background: '#f5f5f7',
          marginTop: '0',
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