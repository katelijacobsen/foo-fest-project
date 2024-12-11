import Form from "next/form";
import { motion } from "framer-motion";

const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return{
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type:"spring", duration: 1.5, bounce: 0},
        opacity: {delay, duration: 0.01}
      }
    }
  }
}

export default function PaymentConfirmed({ state, formStatus }) {
  return (
    <Form>
      <h2>Ordre Bekræftelse</h2>
      <div
      >
        <motion.svg
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          initial="hidden"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#4ece69"
          variants={draw}
          animate="visible"
          >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
          <g id="SVGRepo_iconCarrier">
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
          </g>
        </motion.svg>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>Navn</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {state.guests.single.map((guest, i) => (
            <tr key={i}>
              <td>{guest.firstName}</td>
              <td>{guest.lastName}</td>
              <td>{guest.email}</td>
            </tr>
          ))}
          {state.guests.vip.map((guest, i) => (
            <tr key={i}>
              <td>{guest.firstName}</td>
              <td>{guest.lastName}</td>
              <td>{guest.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        disabled={formStatus.pending}
        className="btn-primary"
      >
        {formStatus.pending ? "Sender..." : "Bekræft"}
      </button>
    </Form>
  );
}

//thead gruppere indholdet af tabellet
// tr står for table row
// th står for table header
// td står fortable table data
