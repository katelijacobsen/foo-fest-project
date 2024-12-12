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
  return (
    <Form className="p-4 flex flex-col items-center justify-center rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack m-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
        Ordre Bekræftelse
      </h2>
      <div className="flex justify-center items-center w-full">
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
      <div className="w-full mt-6 flex flex-col items-center">
        <table className="w-full max-w-xl text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Fornavn</th>
              <th className="px-4 py-2 text-left">Efternavn</th>
              <th className="px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {state.guests.single.map((guest, i) => (
              <tr key={i}>
                <td className="px-4 py-2">{guest.firstName}</td>
                <td className="px-4 py-2">{guest.lastName}</td>
                <td className="px-4 py-2">{guest.email}</td>
              </tr>
            ))}
            {state.guests.vip.map((guest, i) => (
              <tr key={i}>
                <td className="px-4 py-2">{guest.firstName}</td>
                <td className="px-4 py-2">{guest.lastName}</td>
                <td className="px-4 py-2">{guest.email}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Campsite</th>
              <th className="px-4 py-2 text-left">Telt</th>
              <th className="px-4 py-2 text-left">Grøn Camping</th>
            </tr>
          </thead>
          <tbody>
            {state.guests.single.map((guest, i) => (
              <tr key={i}>
                <td className="px-4 py-2">{guest.firstName}</td>
                <td className="px-4 py-2">{guest.lastName}</td>
                <td className="px-4 py-2">{guest.email}</td>
              </tr>
            ))}
            {state.guests.vip.map((guest, i) => (
              <tr key={i}>
                <td className="px-4 py-2">{guest.firstName}</td>
                <td className="px-4 py-2">{guest.lastName}</td>
                <td className="px-4 py-2">{guest.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full max-w-xl text-sm md:text-base">
        </table>
      </div>
      <Link className="btn-primary mt-6 px-6 py-2 bg-red-500 text-white rounded disabled:opacity-50" href="/" >Tilbage til Forsiden</Link>
      {/* <button
        type="submit"
        disabled={formStatus.pending}
        className="btn-primary mt-6 px-6 py-2 bg-red-500 text-white rounded disabled:opacity-50"
      >
        {formStatus.pending ? "Sender..." : "Tilbage til Forsiden"}
      </button> */}
    </Form>
  );
}

//thead gruppere indholdet af tabellet
// tr står for table row
// th står for table header
// td står fortable table data
