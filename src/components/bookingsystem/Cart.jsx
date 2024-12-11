import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Cart() {
  return (
    <aside className="flex flex-col gap-4 rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack p-8">
      <h3 className={`${ceasarDressing.className} text-2xl`}>Indkøbskurv</h3>
      <section>
        <h2 className="font-bold">BILLETTER</h2>
        <ul>
          <li className="flex gap-4">
            <p>Billettype</p>
            <p>XXX kr</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold">CAMPING SPOT</h2>
        <ul>
          <li className="flex gap-4">
            <p>Billettype</p>
            <p>XXX kr</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold">OVERSIGT</h2>
        <ul>
          <li className="flex gap-4">
            <p>Billettype</p>
            <p>XXX kr</p>
          </li>
        </ul>
      </section>
    </aside>
  );
}
