import PrimaryBtn from '@/components/global/buttonFolder/SecondButton';

export default function Form() {
  return (
    <form>
      <fieldset className="grid gap-6 mb-6 md:grid-cols-2">
        <legend className="block mb-2 text-2xl">Personlig Information</legend>
        <div>
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-white "
          >
            Fornavn
          </label>
          <input
            type="text"
            placeholder="Joe"
            autoComplete="name"
            required
            className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
        </div>
        <div>
          <label
            htmlFor="full-name"
            className="block mb-2 text-sm font-medium text-white "
          >
            Efternavn
          </label>
          <input
            type="text"
            placeholder="Doe"
            autoComplete="name"
            required
            className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="joedoe@example.com"
            autoComplete="email"
            required
            className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="email">Mobilnummer</label>
          <input
            type="tel"
            placeholder="12 34 56 78"
            autoComplete="tel"
            required
            className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
        </div>
      </fieldset>
      <PrimaryBtn />
    </form>
  );
}
