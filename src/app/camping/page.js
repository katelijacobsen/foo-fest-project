import Accordion from "@/components/festivalsystem/Accordion";
import Headline from "@/components/global/Headline";
import LineUpRune from "@/img/svg/lineup_rune.svg";
import FaqRune from "@/img/svg/faq_rune.svg";
import CampingMap from "@/img/svg/camping_map.svg";
import Image from "next/image";

export default async function Page() {
  return (
    <section className="p-4 max-w-screen-xl mx-auto">
      <div className="grid gap-4 md:grid-cols-2 my-[8rem]">
        <div>
          <Headline src={LineUpRune} text="CAMPING" />
          <p className="pt-4">Det bedste ved at campere tæt på festivalpladsen er, at grænserne mellem lejrens intimitet og koncertens ekstase næsten forsvinder. Du kan starte din dag med stille toner fra en lut ved lejrbålet og slutte den med hæsblæsende headbanging foran scenen. Camping og musik bliver to sider af samme oplevelse – lige så uadskillelige som Odin og hans ravne.</p>
        </div>
        <Image className="place-self-center" src={CampingMap} alt="billede af camping områder" width={500} height={500} />
      </div>
      <div className="mt-6 max-w-[40rem] mx-auto">
        <div className="grid justify-center">
          <Headline src={FaqRune} text="FAQ" />
        </div>
        <Accordion />
      </div>
    </section>
  );
}
