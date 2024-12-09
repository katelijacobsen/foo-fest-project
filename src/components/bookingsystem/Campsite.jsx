import Headline from "../global/Headline";

const data = [
    {
      "area": "Svartheim",
      "spots": 400,
      "available": 336
    },
    {
      "area": "Nilfheim",
      "spots": 300,
      "available": 0
    },
    {
      "area": "Helheim",
      "spots": 100,
      "available": 96
    },
    {
      "area": "Muspelheim",
      "spots": 200,
      "available": 175
    },
    {
      "area": "Alfheim",
      "spots": 250,
      "available": 81
    }
  ]

export default function Campsite() {
  return (
    <div>
      <h2>HVOR VIL DU CAMPE?</h2>
      <ul className="flex flex-wrap">
        <li className="bg-pink-500">
          <h3>Svartheim</h3>
          <p>XXX ledige pladser</p>
        </li>
        <li className="bg-green-500">
          <h3>Helheim</h3>
          <p>XXX ledige pladser</p>
        </li>
        <li className="bg-yellow-500">
          <h3>MuspelHeim</h3>
          <p>XXX ledige pladser</p>
        </li>
        <li className="bg-blue-500">
          <h3>Svartheim</h3>
          <p>XXX ledige pladser</p>
        </li>
      </ul>
      <section>
        <h4>LEJE AF TELTE</h4>
      </section>
    </div>
  );
}
