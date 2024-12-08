import Link from "next/link";
import Image from "next/image";

const BandCard = ({ band }) => {
  const { name, genre, logo, slug, scene, time, day, cancelled } = band;

  // Bestem billed-URL'en
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <div key={slug}>
      <div className="min-w-[250px]">
        <Link href={`/pages/program/${slug}`}>
          <Image src={imageUrl} alt={name} width={250} height={250} />
          {time && scene && day && name && genre ? (
            <div>
              <div className="flex justify-between">
                <p className="font-bold text-xl">{`${name}`}</p>
                <p>{`${scene}`}</p>
              </div>
              <p className="uppercase">{`${genre}`}</p>
              <p>{`${time} ${day}`}</p>
              {/* .charAt(0).toUpperCase() + day.slice(1) */}
              {cancelled && <p style={{ color: "red" }}>AFLYST</p>}
            </div>
          ) : (
            <p>Ingen optræden planlagt</p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default BandCard;
