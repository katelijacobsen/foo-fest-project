import PrimaryBtn from "@/components/global/buttonFolder/SecondButton";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactInfo({ tickets, formAction }) {
  return (
    <form className="text-white">
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
