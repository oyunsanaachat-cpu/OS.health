// /components/ui/GlassCard.tsx
'use client';
import React from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  header?: string; // << нэмж байна
}>;

export default function GlassCard({ className = '', header, children }: Props) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(155, 184, 185, 0.35)',
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: 16,
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        backdropFilter: 'blur(12px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
        padding: 24,
      }}
    >
      {header && (
        <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: 24, fontWeight: 800, color: '#0b2830' }}>
          {header}
        </h1>
      )}
      {children}
    </div>
  );
}
