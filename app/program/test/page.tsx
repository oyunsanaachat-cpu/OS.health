'use client';

import AssistantFab from "@/components/ui/AssistantFab";
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProgramTestPage() {
  const router = useRouter();
  const [ready] = useState(true);

  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '32px 16px' }}>
      <GlassCard>
        <h2 style={{ marginTop: 0, color: '#0b2830' }}>Эхний үнэлгээ</h2>
        <p style={{ color: '#0b2830' }}>
          Энд 5 үзүүлэлт (Хоол-ус, Хөдөлгөөн, Нойр, Амралт, Муу зуршил) асуултууд орно.
          Бөглөсний дараа өдрийн зорилго, калори/уураг/өөх/нүүрс-ус, ус, дасгал,
          амралтын зөвлөмжийг тооцож харуулна.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <Link
            href="/program/test/food" // дараагийн алхам руу
            style={{
              padding: '12px 18px',
              borderRadius: 12,
              background: '#0b2830',
              color: 'white',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.65)',
            }}
          >
            Асуулт руу шилжих
          </Link>

          <button
            onClick={() => router.push('/program')}
            style={{
              padding: '12px 18px',
              borderRadius: 12,
              background: 'transparent',
              color: '#0b2830',
              fontWeight: 700,
              border: '1px solid rgba(11,40,48,0.35)',
            }}
          >
            Буцах
          </button>
        </div>
      </GlassCard>

      <AssistantFab />
    </main>
  );
}
