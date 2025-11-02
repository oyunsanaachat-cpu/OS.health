'use client';

import React from 'react';

type Props = React.PropsWithChildren<{ className?: string }>;

export default function GlassCard({ className = '', children }: Props) {
  return (
    <div
      className={className}
      style={{
        // #9BB8B9 суурьтай тунгалаг шилэн карт
        background: 'rgba(155, 184, 185, 0.35)',
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: 16,
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        backdropFilter: 'blur(12px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
        padding: 24,
      }}
    >
      {children}
    </div>
  );
}
