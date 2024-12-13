import Card from "./Card";
import { useContext, useState } from "react";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

export default function ChooseTicket({ formAction }) {
  const [count2, setCount2] = useState(0);

  let total = getCountSingle + getCountVip;
  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form>
      <Card setCount2={setCount2} getCountSingle={getCount} ticketType={`single`} formAction={formAction} title="Enkel Billet" price="799" valuta="DKK + Fee" />
      <Card setCount2={setCount2} getCountVip={getCount} ticketType={`vip`} formAction={formAction} title="VIP Billet" price="1299" valuta="DKK + Fee" />

      <button
        className={`${count2 === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87% rounded-sm px-8 py-3 text-customWhite w-fit"}`}
        type="submit"
        formAction={handleBuy}
        // disabled={isButtonDisabled}
      >
        Køb
      </button>
    </form>
  );
}
