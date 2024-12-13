import Card from "./Card";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

export default function ChooseTicket({ formAction, setVipTicketsCount, setNormalTicketsCount }) {
  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form action={handleBuy}>
      <Card setNormalTicketsCount={setNormalTicketsCount} inputName={`singleTickets`} formAction={formAction} title="Enkel Billet" price="799" valuta="DKK + Fee" />
      <Card setVipTicketsCount={setVipTicketsCount} inputName={`vipTickets`} formAction={formAction} title="VIP Billet" price="1299" valuta="DKK + Fee" />
      <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb" type="submit"></PrimaryButton>
    </form>
  );
}
