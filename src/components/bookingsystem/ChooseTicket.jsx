import Card from "./Card";
<<<<<<< HEAD
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
=======
import { useContext } from "react";
>>>>>>> Bookingsystem

export default function ChooseTicket({ formAction }) {
  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
<<<<<<< HEAD
    <form action={handleBuy}>
      <Card inputName={`singleTickets`} formAction={formAction} title="Enkel Billet" price="799" valuta="DKK + Fee" />
      <Card inputName={`vipTickets`} formAction={formAction} title="VIP Billet" price="1299" valuta="DKK + Fee" />
      <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb" type="submit"></PrimaryButton>
=======
    <form>
      <Card
        ticketType={`single`}
        formAction={formAction}
        title="Enkel Billet"
        price="799"
        valuta="DKK + Fee"
        />
      <Card
        ticketType={`vip`}
        formAction={formAction}
        title="VIP Billet"
        price="1299"
        valuta="DKK + Fee"
      />
>>>>>>> Bookingsystem
    </form>
  );
}
