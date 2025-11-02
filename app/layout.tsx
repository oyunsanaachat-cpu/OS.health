// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "OS • Health",
  description: "Эрүүл мэндийн туслах (Оюунсанаа) – тунгалаг загвар",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
