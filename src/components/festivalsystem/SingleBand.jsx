import Image from "next/image";

const SingleBand = ({ band }) => {
  const { name, members, genre, bio, logo } = band;

  //betingelse for billede URL
  const imageUrl = logo.startsWith("https://") || logo.startsWith("http://") ? logo : `http://localhost:8080/logos/${logo}`;

  return (
    <div>
      <Image src={imageUrl} alt={name} width={250} height={250} />
      <h2>{name}</h2>
      <ul>
        {band.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <p>{genre}</p>
      <p>{bio}</p>
    </div>
  );
};

export default SingleBand;
