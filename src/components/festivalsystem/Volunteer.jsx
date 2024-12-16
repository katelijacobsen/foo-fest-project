import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import Link from "next/link";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Volunteer = () => {
  return (
    <section className="py-6 px-4 grid h-screen place-content-center animated-background  bg-gradient-to-r from-customPink via-customRed to-customOrange">
      <div className="max-w-screen-md mx-auto">
        <div>
          <h1 className={`${ceasarDressing.className} text-black text-7xl md:text-8xl text-center`}>BLIV FRIVILLIG</h1>
          <p className="py-4 text-black md:text-2xl">Er du vild med rockmusik og vil være en del af noget episk? Foo Fest søger frivillige til at hjælpe med alt fra bar og madboder til backstage og festivalstemning! Som tak for din indsats får du Gratis billet til festivalen, et kig bag kulisserne og en oplevelse for livet med nye venner og masser af god musik! Tilmeld dig nu, og vær med til at gøre Foo Fest uforglemmelig! Lad os rocke sammen!</p>
        </div>
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Læs mere">
          <Link href="/volunteer" />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Volunteer;
