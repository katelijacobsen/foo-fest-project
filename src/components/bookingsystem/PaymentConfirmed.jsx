import Form from "next/form";
import { motion } from "framer-motion";

export default function PaymentConfirmed({ data, formStatus }) {
  return (
    <Form>
      <h2>Ordre Bekræftelse</h2>
      <motion.div
        className="svgContainer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#4ece69"
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
            />
            <motion.path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 5.47087 7.33782 3"
              stroke="#4ece69"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </motion.div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>Navn</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data.guests.map((guest, i) => (
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
