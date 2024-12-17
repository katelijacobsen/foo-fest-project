import Tickets from "@/img/svg/tickets_illustration.svg";
import Image from "next/image";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import Link from "next/link";

const TicketsSection = () => {
  return (
    <section className="h-[80vh] md:h-screen md:mt-16 grid place-content-center px-4">
      <div className="grid gap-4  max-w-screen-xl mx-auto">
        <Image className="justify-self-center" srcSet={`${Tickets} 320w, ${Tickets} 680w, ${Tickets} 960w, ${Tickets} 1980w`} src={Tickets} alt="billetter" />
        <div>
          <p className="text-center text-xl md:text-2xl md:max-w-[50rem]">På Foo Fest kan du vælge mellem en almindelig billet eller opgradere til en VIP-oplevelse, der giver dig den ultimative luksus og komfort under festivalen. Forkæl dig selv med noget ekstra og gør din festival uforglemmelig!</p>
        </div>
        <div className="justify-self-center pt-4">
          <Link href="/payment">
            <PrimaryButton aria_label_text="Buy tickets button" color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb billetter" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;