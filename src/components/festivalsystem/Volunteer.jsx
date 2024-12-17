import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import Link from "next/link";
import Headline from "@/components/global/Headline";
import VolunteerRune from "@/img/svg/volunteer_rune.svg";

const Volunteer = () => {
  return (
    <section className="py-6 px-4 grid h-[70vh] place-content-center">
      <div className="max-w-screen-md mx-auto">
        <div className="grid place-content-center">
          <Headline src={VolunteerRune} width={45} height={45} size="text-5xl md:text-6xl" text="BLIV FRIVILLIG" />
        </div>
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Læs mere">
          <Link href="/volunteer" />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Volunteer;
