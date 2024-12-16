import { Caesar_Dressing } from "next/font/google";
import { FaBasketShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 sm:p-8"
    >
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, width: 250, height: 420 }}
        style={{ width: 0, height: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col gap-4 rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack p-6 sm:p-8 w-72"
      >
        <h3 className={`${ceasarDressing.className} text-xl sm:text-2xl`}>
          Indkøbskurv
        </h3>
        {emptyCart ? (
          <div className="flex flex-col items-center justify-center gap-2 text-gray-200">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            >
              <FaBasketShopping size={72} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
              className="text-center text-sm sm:text-base"
            >
              Høvding! Tilføj bytte i din kurv.
            </motion.p>
          </div>
        ) : (
          <>
            <section className="text-sm sm:text-base">
              <h2 className="font-bold border-b ">BILLETTER</h2>
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
              {cart.campsite ? (
                <>
                  <h2 className="font-bold border-b">CAMPSITE</h2>
                  <ul className="">
                    <li className="font-bold text-lg">{cart.campsite}</li>
                    {cart.campsite && (
                      <li className="text-xs font-normal text-gray-300">
                        +99kr Booking Gebyr
                      </li>
                    )}
                    {cart.tents.twoPeople !== 0 && (
                      <li>
                        {cart.tents.twoPeople}x 2 Personers Telt{" "}
                        {cart.tents.twoPeople * 299} kr
                      </li>
                    )}
                    {cart.tents.threePeople !== 0 && (
                      <li>
                        {cart.tents.threePeople}x 3 Personers Telt{" "}
                        {cart.tents.threePeople * 399} kr
                      </li>
                    )}
                    {cart.tents.greenCamping && (
                      <li>Grøn Camping 249kr</li>
                    )}
                  </ul>
                </>
              ) : null}
            </section>

            <section className="text-sm sm:text-base">
              <h2 className="font-bold bold border-b">TOTAL</h2>
              <p className="mt-2 font-bold text-end">{sumCart} DKK</p>
            </section>
          </>
        )}
      </motion.aside>
    </motion.section>
  );
}
