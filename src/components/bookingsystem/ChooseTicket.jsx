import Card from "./Card";

export default function ChooseTicket({ formAction }) {
  return (
    <form>
      <Card
        inputName={`singleTickets`}
        formAction={formAction}
        title="Enkel Billet"
        price="799"
        valuta="DKK + Fee"
        />
      <Card
        inputName={`vipTickets`}
        formAction={formAction}
        title="VIP Billet"
        price="1299"
        valuta="DKK + Fee"
      />
    </form>
  );
}
