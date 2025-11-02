"use client";

import Link from "next/link";
import GlassCard from "@components/ui/GlassCard";
import GlassButton from "@components/ui/GlassButton";
import { MENUS, resolveTitle } from "@lib/menu";

export default function ClientPage({ tab }: { tab: keyof typeof MENUS | string }) {
  const safeTab = (Object.keys(MENUS).includes(String(tab)) ? tab : "program") as keyof typeof MENUS;
  const menu = MENUS[safeTab];

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="brand">Эрүүл мэнд</h1>
        <nav className="menu">
          {Object.entries(MENUS).map(([key, m]) => (
            <Link key={key} href={`/?tab=${key}`} className={`item ${safeTab===key ? "active":""}`}>
              {m.icon} <span>{m.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="main">
        <GlassCard className="header">
          <h2>{resolveTitle(safeTab)}</h2>
          <p className="muted">{menu.desc}</p>
        </GlassCard>

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
