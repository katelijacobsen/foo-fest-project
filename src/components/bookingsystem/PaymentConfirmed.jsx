import Form from "next/form";
import { motion } from "framer-motion";
import Link from "next/link";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function PaymentConfirmed({ state, formStatus, startDraw }) {
  const sumCart =
    state.tickets.single * 799 +
    state.tickets.vip * 1299 +
    state.tents.twoPeople * 299 +
    state.tents.threePeople * 399 +
    (state.tents.greenCamping ? 249 : 0) +
    (state.campsite ? 99 : 0);

  console.log(sumCart);

  return (
    <Form className="p-6 flex flex-col items-center justify-center rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack m-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
        Ordre Bekræftelse
      </h2>

      {/* SVG animation */}
      <div className="flex justify-center items-center w-full mb-6 ">
        <motion.svg
          className="w-36 h-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#4ece69"
          initial="hidden"
          variants={draw}
          animate={startDraw ? "visible" : "hidden"}
        >
          <motion.path
            d="M8.5 12.5L10.5 14.5L15.5 9.5"
            stroke="#4ece69"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate="visible"
            variants={draw}
            custom={0}
          />
          <motion.path
            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 5.47087 7.33782 3"
            stroke="#4ece69"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate="visible"
            variants={draw}
            custom={1}
          />
        </motion.svg>
      </div>

      {/* Order Summary Table */}
      <div className="w-full mt-6 flex flex-col items-center">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm md:text-base table-auto">
            <thead className="border border-gray-300">
              <tr>
                <th className="px-4 py-2 text-left">Fornavn</th>
                <th className="px-4 py-2 text-left">Efternavn</th>
                <th className="px-4 py-2 text-left">Billettype</th>
                <th className="px-4 py-2 text-left">Pris</th>
              </tr>
            </thead>
            <tbody>
              {state.guests.single.map((guest, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">{guest.firstName}</td>
                  <td className="px-4 py-2">{guest.lastName}</td>
                  <td className="px-4 py-2">Enkel billet</td>
                  <td className="px-4 py-2">799 DKK</td>
                </tr>
              ))}
              {state.guests.vip.map((guest, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">{guest.firstName}</td>
                  <td className="px-4 py-2">{guest.lastName}</td>
                  <td className="px-4 py-2">VIP Billet</td>
                  <td className="px-4 py-2">1299 DKK</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto w-full mt-6">
          <table className="min-w-full text-sm md:text-base table-auto">
            <thead className="border border-gray-300 flex">
              <tr>
                {state.campsite && (
                  <th className="px-4 py-2 text-left">Campsite</th>
                )}
                {state.tents.twoPeople > 0 && (
                  <th className="px-4 py-2 text-left">To Personers Telte</th>
                )}
                {state.tents.threePeople > 0 && (
                  <th className="px-4 py-2 text-left">Tre Personers Telte</th>
                )}
                <th className="px-4 py-2 text-left">Grøn Camping</th>
                <th className="px-4 py-2 text-left">Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-between">
                <td className="px-4 py-2">{state.campsite}</td>
                <td className="px-4 py-2">
                  {state.tents.twoPeople > 0 && state.tents.twoPeople}
                </td>
                <td className="px-4 py-2">
                  {state.tents.threePeople > 0 && state.tents.threePeople}
                </td>
                <td className="px-4 py-2">
                  {state.tents.greenCamping ? "Ja" : "Nej"}
                </td>
                <td className="px-4 py-2">299 DKK</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-xl font-bold text-white">
          <p>Total: {sumCart} DKK</p>
        </div>

        <Link
          className="font-bold px-8 py-2 my-8 text-xl bg-gradient-to-bl from-customPink text-white to-customOrange"
          href="/"
        >
          Tilbage til Forsiden
        </Link>
      </div>
    </Form>
  );
}

//thead gruppere indholdet af tabellet
// tr står for table row
// th står for table header
// td står fortable table data
