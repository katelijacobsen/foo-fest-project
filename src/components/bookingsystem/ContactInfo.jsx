import PrimaryBtn from "@/components/global/buttonFolder/SecondButton";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactInfo({ tickets, formAction }) {
  return (
    <form className="text-white">
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
      <fieldset className="grid gap-6 mb-6 md:grid-cols-2">
        <legend className="block mb-2 text-2xl">Personlig Information</legend>
        {Array.from({ length: tickets.single }, (_, i) => (
          <ContactForm key={i} i={i} ticketType="single" />
        ))}
        {Array.from({ length: tickets.vip }, (_, i) => (
          <ContactForm key={i} i={i} ticketType="vip" />
        ))}
      </fieldset>
      <button formAction={formAction}>Næste</button>
    </form>
  );
}

function ContactForm({i, ticketType}) {
  return (
    <div>
      {ticketType === "single" && <h2>Enkelt Billet</h2>}
      {ticketType === "vip" && <h2>VIP Billet</h2>}
      <div>
        <label
          htmlFor={`${ticketType}_firstName_${i}`}
          className="block mb-2 text-sm font-medium text-white "
        >
          Fornavn
        </label>
        <input
          name={`${ticketType}_firstName_${i}`}
          type="text"
          placeholder="Joe"
          autoComplete="name"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor={`${ticketType}_lastName_${i}`}
          className="block mb-2 text-sm font-medium text-white "
        >
          Efternavn
        </label>
        <input
          name={`${ticketType}_lastName_${i}`}
          type="text"
          placeholder="Doe"
          autoComplete="name"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
        />
      </div>
      <div>
        <label htmlFor={`${ticketType}_email_${i}`}>Email</label>
        <input
          name={`${ticketType}_email_${i}`}
          type="email"
          placeholder="joedoe@example.com"
          autoComplete="email"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
        />
      </div>
      <div>
        <label htmlFor={`${ticketType}_phonenumber_${i}`}>Mobilnummer</label>
        <input
          name={`${ticketType}_phonenumber_${i}`}
          type="tel"
          placeholder="12 34 56 78"
          autoComplete="tel"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
        />
      </div>
    </div>
  );
}
