import Link from "next/link";
import Image from "next/image";

const BandCard = ({ band }) => {
  const { name, genre, logo, slug, scene, time, logoCredits, day, cancelled } = band;

  // Bestem billed-URL'en
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <div key={slug}>
      <div className="min-w-[250px]">
        <Link href={`/pages/program/${slug}`}>
          <Image src={imageUrl} alt={name} width={250} height={250} />
          {/* <p className="font-bold text-xl">{name}</p>
          <p className="uppercase">{genre}</p> */}
          {time && scene && day && name && genre ? (
            <>
              <div className="flex justify-between">
                <p className="font-bold text-xl">{`${name}`}</p>
                <p>{`${scene}`}</p>
              </div>
              <p className="uppercase">{`${genre}`}</p>
              {/* <p>{`${scene}`}</p> */}
              <p>{` ${time} ${day.charAt(0).toUpperCase() + day.slice(1)}`}</p>
              {/* <p>{`${day.charAt(0).toUpperCase() + day.slice(1)}`}</p> */}
              {cancelled && <p style={{ color: "red" }}>AFLYST</p>}
            </>
          ) : (
            <p>Ingen optræden planlagt</p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default BandCard;

// <div key={slug}>
//   <div>
//     <Link href={`/program/${slug}`}>
//       <Image src={imageUrl} alt={name} width={200} height={200} />
//       <p>{name}</p>
//       <p>{genre}</p>
//       <p>{scene}</p>
//       <p>{time}</p>
//     </Link>
//   </div>
// </div>
