import { Caesar_Dressing } from "next/font/google";
import { FaBasketShopping } from "react-icons/fa6";
const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Cart({ cart }) {
  //Kigger om vores kurv er tom:
  const emptyCart = cart.tickets.single === 0 && cart.tickets.vip === 0;
  const sumCart =
    cart.tickets.single * 799 +
    cart.tickets.vip * 1299 +
    cart.tents.twoPeople * 299 + cart.tents.threePeople * 399 + (cart.greenCamping ? 249 : 0);

  return (
    <aside className="flex flex-col gap-4 rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack p-8">
      <h3 className={`${ceasarDressing.className} text-2xl`}>Indkøbskurv</h3>
      {emptyCart ? (
        <div className="flex flex-col items-center justify-center gap-2 text-gray-200">
          <FaBasketShopping size={72} />
          <p>Høvding! Tilføj bytte i din kurv.</p>
        </div>
      ) : (
        <>
          <section>
            <h2 className="font-bold">BILLETTER</h2>
            <ul>
              <li className="flex flex-col gap-4">
                {cart.tickets.single !== 0 && (
                  <p>
                    {cart.tickets.single}x Enkelbillet{" "}
                    {cart.tickets.single * 799} kr
                  </p>
                )}
                {cart.tickets.vip !== 0 && (
                  <p>
                    {cart.tickets.vip}x VIP Billet {cart.tickets.vip * 1299} kr
                  </p>
                )}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">CAMPSITE</h2>
            <ul>
              <li className="flex flex-col gap-4">
                <p>{cart.campsite}</p>
                {cart.tents.twoPeople !== 0 && (
                  <p>
                  {cart.tents.twoPeople}x 2 Personers Telt{" "}
                  {cart.tents.twoPeople * 299} kr
                </p>
                )}
                {cart.tents.threePeople !== 0 && (
                  <p>
                  {cart.tents.threePeople}x 3 Personers Telt{" "}
                  {cart.tents.threePeople * 399} kr
                </p>
                )}
                {cart.greenCamping && <p>+249kr for Grøn Camping</p>}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">TOTAL</h2>
            <ul>
              <li className="flex gap-4">
                <p>{sumCart} DKK</p>
              </li>
            </ul>
          </section>
        </>
      )}
    </aside>
  );
}
