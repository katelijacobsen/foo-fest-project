import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import Link from "next/link";
import Headline from "@/components/global/Headline";
import VolunteerRune from "@/img/svg/volunteer_rune.svg";

const Volunteer = () => {
  return (
    <section className="py-6 px-4 grid h-screen place-content-center">
      <div className="max-w-screen-md mx-auto">
        <div className="grid place-content-center">
          <Headline src={VolunteerRune} width={45} height={45} size="text-4xl md:text-6xl" text="BLIV FRIVILLIG" />
        </div>
        <p className="py-4 text-xl text-center md:text-2xl">Er du vild med rockmusik og vil være en del af noget episk? Foo Fest søger frivillige til at hjælpe med alt fra bar og madboder til backstage og festivalstemning! Som tak for din indsats får du ratis billet til festivalen, et kig bag kulisserne og en oplevelse for livet med nye venner og masser af god musik! Tilmeld dig nu, og vær med til at gøre Foo Fest uforglemmelig! Lad os rocke sammen!</p>
      </div>
      <div className="grid place-content-center pt-4">
        <Link href="/volenteer">
          <PrimaryButton aria_label_text="Read more" color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Læs mere" />
        </Link>
      </div>
    </section>
  );
};

export default Volunteer;
