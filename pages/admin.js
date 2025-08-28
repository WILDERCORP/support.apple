import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      background: '#f8f9fa'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{ 
          color: '#0071e3', 
          marginBottom: '20px',
          fontSize: '28px' 
        }}>
          🍎 Apple Support Admin
        </h1>
        
        <p style={{ 
          color: '#666', 
          marginBottom: '30px',
          fontSize: '16px',
          lineHeight: '1.5' 
        }}>
          Welcome to the Apple Support admin panel. Choose your administrative task below.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button
            onClick={() => router.push('/admin-chat')}
            style={{
              background: '#0071e3',
              color: 'white',
              border: 'none',
              padding: '15px 25px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#005bb5'}
            onMouseOut={(e) => e.target.style.background = '#0071e3'}
          >
            💬 Respond to Customer Messages
          </button>

          <button
            onClick={() => router.push('/')}
            style={{
              background: '#f5f5f5',
              color: '#333',
              border: '1px solid #ddd',
              padding: '15px 25px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#e8e8e8'}
            onMouseOut={(e) => e.target.style.background = '#f5f5f5'}
          >
            🏠 Back to Main Site
          </button>
        </div>
      </div>
    </div>
  );
}