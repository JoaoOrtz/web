// src/components/ToastDemo.tsx
'use client';

import { toast } from 'react-toastify';

const ToastDemo = () => {
  const showToast = (type: string) => {  // Si usas TypeScript, deja el tipo
    switch (type) {
      case 'success':
        toast.success('¡Operación exitosa! 🎉');
        break;
      case 'error':
        toast.error('¡Algo salió mal! ❌');
        break;
      case 'warning':
        toast.warn('¡Cuidado! ⚠️');
        break;
      case 'info':
        toast.info('Información importante ℹ️');
        break;
      default:
        toast('Mensaje personalizado! ✨');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--font-geist-sans)' }}>
      <h1>Prueba de React Toastify</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <button 
          onClick={() => showToast('success')}
          style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Success Toast
        </button>
        
        <button 
          onClick={() => showToast('error')}
          style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Error Toast
        </button>
        
        <button 
          onClick={() => showToast('warning')}
          style={{ padding: '10px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Warning Toast
        </button>
        
        <button 
          onClick={() => showToast('info')}
          style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Info Toast
        </button>
        
        <button 
          onClick={() => showToast('custom')}
          style={{ padding: '10px', backgroundColor: '#9C27B0', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Custom Toast
        </button>
      </div>
    </div>
  );
};

export default ToastDemo;