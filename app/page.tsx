// app/page.tsx
import Link from "next/link";
import GlassCard from "../components/ui/GlassCard";

export default function IntroPage(){
  return (
    <div style={{display:"grid", gap:20}}>
      <GlassCard className="glass" header="Эрүүл мэндийн хөтөлбөрт тавтай морил!">
        <div style={{display:"grid", gap:18, gridTemplateColumns:"minmax(0,1fr) 380px"}}>
          <div>
            <p>
              Доорх үйлчилгээг “Оюунсанаа” хиймэл оюун туслах гүйцэтгэнэ.
              <b> Оюунсанаа нь эмч биш</b>; зөвлөгөө нь танин мэдэхүй, амьдралын хэв маягийн
              чиглэл өгөх зорилготой. Эрүүл мэндийн зовиур, яаралтай тусламж шаардлагатай
              тохиолдолд мэргэжлийн эмчид хандана уу.
            </p>
            <p>
              Хөтөлбөр нь 5 үзүүлэлтээр таны өдөр тутмын явцыг хянаж дүгнэнэ:
              <b> Хоол/ус</b>, <b>Хөдөлгөөн</b>, <b>Нойр</b>, <b>Амралт</b>, <b>Муу зуршил</b>.
            </p>
            <Link href="/health/test" className="btn">Эхлэх</Link>
          </div>

          {/* Зураг: /public/images/doctor.jpg байрлуул */}
          <div className="glass" style={{overflow:"hidden", borderRadius:16}}>
            <img
              src="/images/doctor.jpg"
              alt="OyunSanaa assistant"
              style={{width:"100%", height:420, objectFit:"cover", display:"block"}}
            />
          </div>
        </div>
      </GlassCard>

      <div style={{display:"grid", gap:16, gridTemplateColumns:"repeat(5, minmax(0,1fr))"}}>
        <MiniLink title="Хөтөлбөр" href="/health/plan"/>
        <MiniLink title="Даалгавар" href="/health/task"/>
        <MiniLink title="Хоол · Ус" href="/health/nutrition"/>
        <MiniLink title="Хөдөлгөөн" href="/health/movement"/>
        <MiniLink title="Нойр" href="/health/sleep"/>
        <MiniLink title="Амралт" href="/health/rest"/>
        <MiniLink title="Муу зуршил" href="/health/habits"/>
        <MiniLink title="Тайлан" href="/health/report"/>
        <MiniLink title="Дүгнэлт" href="/health/summary"/>
        <MiniLink title="Тохиргоо" href="/health/settings"/>
      </div>
    </div>
  );
}

function MiniLink({title, href}:{title:string; href:string}){
  return (
    <Link href={href} className="glass" style={{
      display:"flex", alignItems:"center", justifyContent:"center",
      height:96, textDecoration:"none", color:"inherit", fontWeight:600,
      borderRadius:16
    }}>
      {title}
    </Link>
  );
}
