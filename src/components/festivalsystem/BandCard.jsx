import Link from "next/link";
import Image from "next/image";

const BandCard = ({ band, bandEvents }) => {
  const { name, genre, logo, slug, logoCredits } = band;

  // Bestem billed-URL'en
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <div key={slug}>
      <div>
        <Link href={`/program/${slug}`}>
          <Image src={imageUrl} alt={name} width={200} height={200} />
          <p>{name}</p>
          <p>{genre}</p>
        </Link>

        {bandEvents.map((index, event) => (
          <div key={index}>
            <div>{event.name}</div>
            <div>{event.genre}</div>
            <div>{event.scene}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandCard;
