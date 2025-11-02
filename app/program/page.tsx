import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import AssistantFab from "@/components/ui/AssistantFab"; 
// alias таарахгүй бол:
// import AssistantFab from "../../../components/ui/AssistantFab";

export default function Page() {
  return (
    <>
      {
      
export const dynamic = "force-static";

export default function ProgramIntroPage() {
  return (
    <main
      style={{
        maxWidth: 920,
        margin: "0 auto",
        padding: "32px 16px",
        textAlign: "center",
      }}
    >
      <GlassCard className="mb-4">
        <h3 className="text-lg font-semibold">
          Эрүүл мэндийн хөтөлбөрт тавтай морил!
        </h3>
        <p className="opacity-80">
          Энэ бол Оюунсанаагийн туслах хөтөлбөрийн эхлэл юм.
        </p>
      </GlassCard>

      <div style={{ marginTop: 24 }}>
        <Image
          src="/oyunsanaa.png"
          alt="Оюунсанаа"
          width={180}
          height={180}
          style={{
            objectFit: "cover",
            borderRadius: 16,
            margin: "0 auto",
          }}
        />
      </div>

      <div style={{ marginTop: 24 }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#0b2830",
            marginBottom: 8,
          }}
        >
          Сайн байна уу! Эрүүл мэндийн хөтөлбөрт тавтай морил.
        </h1>
        <p style={{ color: "#0b2830", lineHeight: 1.6 }}>
          Би <b>Оюунсанаа</b> — таны туслах. Би эмч биш, гэхдээ таны нас, хүйс,
          хөдөлгөөн, хооллолт, унтах, стрессийн түвшинд тулгуурлан өдөр бүрийн
          зорилго, калори, ус, нойр, амралт, муу зуршлыг тооцоолж зөвлөнө.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <Link
          href="/program/test"
          style={{
            padding: "12px 24px",
            borderRadius: 12,
            background: "#0b2830",
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Хөтөлбөр эхлүүлэх
        </Link>
      </div>

    </main>
  );
}
<AssistantFab label="Эхлэх" onClick={() => location.href = "/health/test"} />
    </>
  );
}
