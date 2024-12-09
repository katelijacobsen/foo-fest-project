import Image from "next/image";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SingleBand = ({ band }) => {
  const { name, members, genre, bio, logo } = band;

  //betingelse for billede URL
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <div>
      <Image src={imageUrl} alt={name} width={450} height={450} />
      <h2 className={`${ceasarDressing.className} font-bold bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent text-4xl`}>{name.toUpperCase()}</h2>
      <div>
        <h2 className="font-bold">Medlemmer: </h2>
      </div>
      <ul>
        {band.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <div className="flex gap-1">
        <h2 className="font-bold">Genre:</h2>
        <p>{genre}</p>
      </div>
      <div>
        <h2 className="font-bold">Beskrivelse:</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default SingleBand;
