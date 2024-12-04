import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MyComponent = () => {
  return (
    <div>
      <h1 className={`${ceasarDressing.className} text-4xl`}>
        <span></span>FOO FESTIVAL - 2024{" "}
      </h1>
    </div>
  );
};

export default MyComponent;
