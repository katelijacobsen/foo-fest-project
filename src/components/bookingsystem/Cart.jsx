import { Caesar_Dressing } from "next/font/google";
import { FaBasketShopping } from "react-icons/fa6";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Cart({ cart }) {
  // Kigger om vores kurv er tom:
  const emptyCart = cart.tickets.single === 0 && cart.tickets.vip === 0;
  const sumCart =
    cart.tickets.single * 799 +
    cart.tickets.vip * 1299 +
    cart.tents.twoPeople * 299 +
    cart.tents.threePeople * 399 +
    (cart.tents.greenCamping ? 249 : 0) +
    (cart.campsite ? 99 : 0);

  return (
    <section className="p-4 sm:p-8">
      <aside className="flex flex-col gap-4 rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack p-6 sm:p-8 w-72">
        <h3 className={`${ceasarDressing.className} text-xl sm:text-2xl`}>
          Indkøbskurv
        </h3>
        {emptyCart ? (
          <div className="flex flex-col items-center justify-center gap-2 text-gray-200">
            <FaBasketShopping size={72} />
            <p className="text-center text-sm sm:text-base">
              Høvding! Tilføj bytte i din kurv.
            </p>
          </div>
        ) : (
          <>
            <section className="text-sm sm:text-base">
              <h2 className="font-bold">BILLETTER</h2>
              <ul className="mt-2 space-y-2">
                {cart.tickets.single !== 0 && (
                  <li>
                    {cart.tickets.single}x Enkelbillet{" "}
                    {cart.tickets.single * 799} kr
                  </li>
                )}
                {cart.tickets.vip !== 0 && (
                  <li>
                    {cart.tickets.vip}x VIP Billet {cart.tickets.vip * 1299} kr
                  </li>
                )}
              </ul>
            </section>

            <section className="text-sm sm:text-base">
              <h2 className="font-bold">CAMPSITE</h2>
              <ul className="mt-2 space-y-2">
                <li className="font-bold">{cart.campsite}</li>
                {cart.tents.twoPeople !== 0 && (
                  <li>
                    {cart.tents.twoPeople}x 2 Personers Telt{" "}
                    {cart.tents.twoPeople * 299} kr
                  </li>
                )}
                {cart.campsite && <li className="text-sm">+99kr Booking Fee</li>}
                {cart.tents.threePeople !== 0 && (
                  <li>
                    {cart.tents.threePeople}x 3 Personers Telt{" "}
                    {cart.tents.threePeople * 399} kr
                  </li>
                )}
                {cart.tents.greenCamping && <li>+249kr for Grøn Camping</li>}
              </ul>
            </section>

            <section className="text-sm sm:text-base">
              <h2 className="font-bold">TOTAL</h2>
              <p className="mt-2 font-bold">{sumCart} DKK</p>
            </section>
          </>
        )}
      </aside>
    </section>
  );
}
