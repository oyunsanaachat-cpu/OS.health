"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import GlassCard from "@components/ui/GlassCard";
import GlassButton from "@components/ui/GlassButton";
import { MENUS, resolveTitle } from "@lib/menu";

export default function Page() {
  const q = useSearchParams();
  const tab = (q.get("tab") ?? "program") as keyof typeof MENUS;
  const menu = MENUS[tab];

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="brand">Эрүүл мэнд</h1>
        <nav className="menu">
          {Object.entries(MENUS).map(([key, m]) => (
            <Link key={key} href={`/?tab=${key}`} className={`item ${tab===key ? "active":""}`}>
              {m.icon} <span>{m.label}</span>
            </Link>
          ))}
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
