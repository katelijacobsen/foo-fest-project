import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Headline from "@/components/global/Headline";
import VolunteerRune from "@/img/svg/volunteer_rune.svg";
import Accordion from "@/components/festivalsystem/Accordion";
import FaqRune from "@/img/svg/faq_rune.svg";

import Image from "next/image";
import RuneCircle from "@/img/svg/rune_circle.svg";

export default async function Page() {
  return (
    <main>
      <Header />
      <section className="p-4 max-w-screen-xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 my-14">
          <div>
            <Headline src={VolunteerRune} text="BLIV FRIVILLIG" size="text-[3rem] md:text-[5rem]" width={45} height={45} />
            <p className="pt-4 text-lg md:text-xl">Har du lyst til at opleve festivalen på en helt unik måde? Så bliv en del af vores fantastiske hold af frivillige og vær med til at skabe en festival, der bringer nordisk mytologi, musik og fællesskab til live! At være frivillig handler ikke kun om at hjælpe – det handler om at blive en del af en klan, hvor vi sammen bygger noget legendarisk. Vi søger engagerede mennesker, der vil bidrage med deres tid og gode energi, og som samtidig ønsker en oplevelse udover det sædvanlige.</p>
          </div>
          <Image className="motion-safe:animate-[spin_50s_linear_infinite] place-self-center " src={RuneCircle} alt="cirkel af runer der roterer" width={250} height={250} />
        </div>
        <div className="py-6 md:py-11 max-w-[40rem] mx-auto">
          <div className="grid justify-center">
            <Headline src={FaqRune} width={45} height={45} size="text-4xl md:text-6xl" text="FAQ" />
          </div>
          <Accordion questionOne="Hvordan bliver jeg frivillig?" textOne="Ansøg alene eller med dine venner ved at skrive en mail til kontaktpersonen, som er knyttet til den specifikke frivillig rolle" questionTwo="Hvem kan blive frivillig på FooFest?" textTwo="Alle, der har lyst til at tage på festival, kan blive frivillige! Man skal blot være fyldt 15 år ved festivalens start." questionThree="Hvilke formål støtter jeg ved at være frivillig?" textThree="Din indsats som frivillig går udelukkende til at støtte gode formål." questionFour="Hvor mange timer skal jeg være frivillig?" textFour="Som frivillig skal du lægge en indsats på 32 timer fordelt over hele festivalperioden." />
        </div>
      </section>
      <Footer />
    </main>
  );
}
