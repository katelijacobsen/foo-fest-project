import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordionitem = ({
  isOpen,
  setIsOpen,
  question,

  item,
  textOne,
  textTwo,
  textThree,
}) => {
  return (
    <li className="w-full  py-2 ">
      <button
        onClick={() => {
          isOpen == item ? setIsOpen(0) : setIsOpen(item);
        }}
        className=" flex items-center justify-between border-white w-full border-b-2"
      >
        <p className="pb-1">{question}</p>
        {isOpen == item ? <FiMinus className="place-items-center w-5 h-5 text-white" /> : <GoPlus className=" w-5 h-5 text-white" />}
      </button>
      {isOpen == item && (
        <div className="">
          <p className=""> {textOne}</p>
          {/* <p className="font-sans"> {textTwo}</p>
          <p className="font-sans "> {textThree}</p> */}
        </div>
      )}
    </li>
  );
};

export default Accordionitem;
