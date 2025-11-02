import GlassCard from "@/components/ui/GlassCard";
import AssistantFab from "@/components/ui/AssistantFab";

export const dynamic = 'force-static';

export default function ProgramIntroPage() {
  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '32px 16px' }}>
      <GlassCard>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '160px 1fr', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 160, height: 160 }}>
            <Image
              src="/oyunsanaa.png"
              alt="Оюунсанаа"
              fill
              sizes="160px"
              priority
              style={{ objectFit: 'cover', borderRadius: 16 }}
            />
          </div>

          <div>
            <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: '#0b2830' }}>
              Эрүүл мэндийн хөтөлбөрт тавтай морил!
            </h1>
            <p style={{ marginTop: 8, color: '#0b2830' }}>
              Би <b>Оюунсанаа</b>. Би эмч биш — AI туслах. Хариултад тань үндэслэн
              таны өдөр тутмын зорилго, калори, ус, нойр, амралт, муу зуршлын
              хяналтыг гаргаж өгнө.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <Link
                href="/program/test"
                style={{
                  padding: '12px 18px',
                  borderRadius: 12,
                  background: '#0b2830',
                  color: 'white',
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.65)',
                }}
              >
                Хөтөлбөр эхлэх
              </Link>

              <a
                href="https://oyunsanaa.com/policy" // хүсвэл солино
                style={{
                  padding: '12px 18px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: '#0b2830',
                  fontWeight: 700,
                  border: '1px solid rgba(11,40,48,0.35)',
                }}
              >
                Анхааруулга
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </main>
  );
}
