import Image from "next/image";
const Headline = ({ src, text }) => {
  return (
    <div>
      <Image src={src} alt="rune" width={50} height={50} />
      <h1>{text}</h1>
    </div>
  );
};

export default Headline;
