import { Suspense } from "react";
import ClientPage from "./ClientPage";

export const dynamic = "force-dynamic"; // static-export алдаа дарах

export default function Page({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const tab = (searchParams?.tab ?? "program") as any;

  return (
    <Suspense fallback={<div style={{ padding: 16 }}>Түр хүлээнэ үү…</div>}>
      <ClientPage tab={tab} />
    </Suspense>
  );
}
        </nav>
      </aside>

      <main className="main">
        <GlassCard className="header">
          <h2>{resolveTitle(tab)}</h2>
          <p className="muted">{menu.desc}</p>
        </GlassCard>

        {/* Эндээс доош тухайн табын түр placeholder — дараа нь бодит компонентоо солино */}
        <section className="grid">
          <GlassCard>
            <h3>Товч тайлбар</h3>
            <p>Энд {menu.label}-ийн карт, форм, график орно.</p>
          </GlassCard>

          <GlassCard>
            <h3>Үйлдлүүд</h3>
            <div className="row">
              <GlassButton>Өгөг оруулах</GlassButton>
              <GlassButton>Өдрийн дүгнэлт</GlassButton>
              <GlassButton className="ghost">Тохиргоо</GlassButton>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  );
}
