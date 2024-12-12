import Tickets from "@/img/svg/tickets.svg";
import Image from "next/image";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import Link from "next/link";

const TicketsSection = () => {
  return (
    <section className="h-screen grid place-content-center">
      <div className="grid gap-4  max-w-screen-xl mx-auto">
        <Image className="justify-self-center" srcSet={`${Tickets} 320w, ${Tickets} 680w, ${Tickets} 960w, ${Tickets} 1980w`} src={Tickets} alt="billetter" />
        <div>
          <p className="text-center text-2xl md:text-3xl md:max-w-[50rem]">På Foo Fest tilbyder vi både alm. billet og VIP billet - til dem som lige skal have den ekstra luksus oplevelse af festivalen.</p>
        </div>
        <div className="justify-self-center">
          <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb billetter" />
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
