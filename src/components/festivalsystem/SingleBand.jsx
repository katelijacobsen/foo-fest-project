import Image from "next/image";
import { Caesar_Dressing } from "next/font/google";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SingleBand = ({ band }) => {
  const { name, members, genre, bio, logo, slug } = band;

  //betingelse for billede URL
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <section>
      <Link href={`/program/${slug}`}>
        <FaArrowLeft className="text-customOrange h-10 w-10 mb-4 ml-4 border-solid border-[1px] border-customOrange rounded-full p-2" />
      </Link>
      <div className="grid grid-columns-subgrid col-span-full grid-rows-4 row-span-full">
        <Image className="row-start-1 row-end-4 col-span-full justify-self-center" src={imageUrl} alt={name} width={450} height={450} />
        <div className=" grid gap-4 bg-opacity-45 bg-gradient-to-tl from-transparent via-transparent to-customBlack row-start-2 p-4 mt-20 row-end-5 col-start-1">
          <h2 className={`${ceasarDressing.className} font-bold bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent text-4xl`}>{name.toUpperCase()}</h2>
          <div className="grid gap-2">
            <h2 className="font-bold text-xl">Medlemmer: </h2>
            <ul>
              {band.members.map((member) => (
                <li className="text-lg" key={member}>
                  {member}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 items-center">
            <h2 className="font-bold text-xl">Genre:</h2>
            <p className="text-lg">{genre}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Beskrivelse:</h2>
            <p className="text-lg">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBand;
