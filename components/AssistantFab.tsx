'use client';

import { useState } from 'react';

export default function AssistantFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Оюунсанаа туслах"
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          width: 56,
          height: 56,
          borderRadius: 999,
          background: '#9BB8B9',
          color: '#0b2830',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
          fontWeight: 700,
        }}
      >
        🩺
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            right: 20,
            bottom: 86,
            width: 320,
            maxWidth: 'calc(100vw - 40px)',
            background: 'rgba(155,184,185,0.92)',
            color: '#0b2830',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 16,
            boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
            padding: 16,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Оюунсанаа</div>
          <p style={{ fontSize: 14, lineHeight: 1.5 }}>
            Би эмч биш, AI туслах юм. Энэ хэсэгт товч зөвлөгөө, тайлбар гарна.
            Асуултыг бөглөхөд туслах товчлууруудыг дараах хуудсанд харуулна.
          </p>
        </div>
      )}
    </>
  );
}
