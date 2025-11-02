import { Suspense } from "react";
import ClientPage from "./ClientPage";

export const dynamic = "force-dynamic";

export default function Page({ searchParams }: { searchParams?: { tab?: string } }) {
  const tab = (searchParams?.tab ?? "program") as any;
  return (
    <Suspense fallback={<div style={{ padding: 16 }}>Түр хүлээнэ үү…</div>}>
      <ClientPage tab={tab} />
    </Suspense>
  );
}
