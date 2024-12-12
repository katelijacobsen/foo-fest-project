import Card from "./Card";
import { useContext } from "react";

export default function ChooseTicket({ formAction }) {
  return (
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
    </form>
  );
}
