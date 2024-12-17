"use client";

export default function ContactInfo({ tickets, formAction }) {
  return (
    <form className="text-white rounded-lg bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-4">
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

function ContactForm({ i, ticketType }) {
  return (
    <div>
      {ticketType === "single" && <h2 className="font-bold text-xl">Enkelt Billet</h2>}
      {ticketType === "vip" && <h2>VIP Billet</h2>}
      <div className="mb-2.5">
        <label htmlFor={`${ticketType}_firstName_${i}`} className="block text-sm font-medium text-white ">
          Fornavn
        </label>
        <input
          name={`${ticketType}_firstName_${i}`}
          type="text"
          placeholder="Joe"
          autoComplete="given-name"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-2 valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor={`${ticketType}_lastName_${i}`} className="block text-sm font-medium text-white ">
          Efternavn
        </label>
        <input
          name={`${ticketType}_lastName_${i}`}
          type="text"
          placeholder="Doe"
          autoComplete="family-name"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-2 valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor={`${ticketType}_email_${i}`}>Email</label>
        <input
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-2 valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
          name={`${ticketType}_email_${i}`}
          type="email"
          placeholder="joedoe@example.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor={`${ticketType}_phonenumber_${i}`}>Mobilnummer</label>
        <input
          name={`${ticketType}_phonenumber_${i}`}
          type="tel"
          placeholder="12 34 56 78"
          autoComplete="tel"
          required
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-2 valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        />
      </div>
    </div>
  );
}
