// app/program/page.tsx

import AssistantFab from "@/components/ui/AssistantFab";

export const dynamic = "force-static";

export default function ProgramPage() {
  return (
    <main
      style={{
        maxWidth: 920,
        margin: "0 auto",
        padding: "32px 16px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#0b2830",
          marginBottom: 12,
        }}
      >
        Эрүүл мэндийн хөтөлбөрт тавтай морил!
      </h2>

      <p style={{ fontSize: 16, opacity: 0.8, lineHeight: 1.6 }}>
        Сайн байна уу, би <b>Оюунсанаа</b> — таны эрүүл мэндийн AI туслах.
        Та зорилгоо тодорхойлоод, өдөр бүрийн калори, ус, нойр, амралт,
        зуршлын хяналтаа хөтлөөрэй.
      </p>

      <div style={{ marginTop: 32 }}>
        <button
          onClick={() => alert("Хөтөлбөр эхэллээ!")}
          style={{
            padding: "14px 22px",
            fontSize: 16,
            borderRadius: 12,
            backgroundColor: "#0b2830",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Хөтөлбөр эхлэх
        </button>
      </div>

      <AssistantFab label="Туслах" />
    </main>
  );
}
