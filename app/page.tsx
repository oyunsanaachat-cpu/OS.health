import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import AssistantFab from "@/components/ui/AssistantFab";
export const dynamic = "force-static";

const tiles = [
  { title: "Хөтөлбөр", href: "/health/plan" },
  { title: "Даалгавар", href: "/health/task" },
  { title: "Хоол · Ус", href: "/health/nutrition" },
  { title: "Хөдөлгөөн", href: "/health/movement" },
  { title: "Нойр", href: "/health/sleep" },
  { title: "Амралт", href: "/health/rest" },
  { title: "Муу зуршил", href: "/health/habits" },
  { title: "Үзлэг", href: "/health/check" },
  { title: "Тайлан", href: "/health/report" },
  { title: "Дүгнэлт", href: "/health/summary" }
];

export default function Home() {
  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 16px" }}>
      <div style={{
        marginBottom: 20, padding: "16px 18px",
        borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(155,184,185,0.14)",
        backdropFilter: "blur(6px)"
      }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color:"#0b2830" }}>Эрүүл мэнд</h1>
        <p style={{ margin: "8px 0 0", opacity: .8, color:"#0b2830" }}>Доорх 10 цэснээс аль нэгийг дарж орно.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 16 }}>
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} style={{ textDecoration: "none", color: "inherit" }}>
            <GlassCard>{t.title}</GlassCard>
          </Link>
        ))}
      </div>

      <AssistantFab label="Туслах" />
    </main>
  );
}
