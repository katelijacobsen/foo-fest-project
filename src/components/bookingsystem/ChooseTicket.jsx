import Card from "./Card";
import { useContext } from "react";

export default function ChooseTicket({ formAction }) {
  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form className="flex flex-col md:flex-row gap-4 items-center">
      <Card ticketType={`single`} formAction={formAction} title="ENKEL BILLET" price="799" valuta="DKK + Fee" />
      <Card className="" ticketType={`vip`} formAction={formAction} title="VIP BILLET" price="1299" valuta="DKK + Fee" />  
    </form>
  );
}
