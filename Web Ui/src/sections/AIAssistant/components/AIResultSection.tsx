import { Typography, Button } from '@mui/material';

const AIResultSection = ({
  title,
  response,
  loading,
  onAction,
  buttonText,
}: {
  title: string;
  response: string;
  loading: boolean;
  onAction: () => void;
  buttonText: string;
}) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        border: '2px solid #e0e0e0',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '60vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '20px',
        marginBottom: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ 
          fontSize: "16px", 
          lineHeight: "1.8", 
          whiteSpace: 'pre-wrap',
          color: loading ? '#666' : '#333',
          fontFamily: 'monospace'
        }}
      >
        {loading ? (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            color: '#052845',
            fontWeight: '500'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '2px solid #052845',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            {title}
          </div>
        ) : response}
      </Typography>
    </div>
    <Button
      variant="contained"
      color="primary"
      style={{
        textTransform: 'none',
        fontSize: '15px',
        borderRadius: '8px',
        padding: '10px 24px',
        fontWeight: '500',
        backgroundColor: '#052845',
        '&:hover': {
          backgroundColor: '#083860',
        }
      }}
      onClick={onAction}
      disabled={loading}
    >
      {loading ? 'Procesando...' : buttonText}
    </Button>
  </div>
);

export default AIResultSection;