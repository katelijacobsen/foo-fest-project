import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordionitem = ({ isOpen, setIsOpen, questionOne, questionTwo, questionThree, questionFour, item, textOne, textTwo, textThree, textFour }) => {
  return (
    <li className="w-full  py-2 ">
      <button
        onClick={() => {
          isOpen == item ? setIsOpen(0) : setIsOpen(item);
        }}
        className="flex items-center justify-between border-white w-full border-b-2"
      >
        <div className="pb-1 text-left">
          <p className="text-base md:text-lg">{questionOne}</p>
          <p className="text-base md:text-lg">{questionTwo}</p>
          <p className="text-base md:text-lg">{questionThree}</p>
          <p className="text-base md:text-lg">{questionFour}</p>
        </div>
        <div>{isOpen == item ? <FiMinus className="place-items-center w-5 h-5 text-white" /> : <GoPlus className=" w-5 h-5 text-white" />}</div>
      </button>
      {isOpen == item && (
        <div className="pt-1">
          <p className="text-base md:text-lg text-customWhite_3"> {textOne}</p>
          <p className="text-base md:text-lg text-customWhite_3"> {textTwo}</p>
          <p className="text-base md:text-lg text-customWhite_3"> {textThree}</p>
          <p className="text-base md:text-lg text-customWhite_3"> {textFour}</p>
        </div>
      )}
    </li>
  );
};

export default Accordionitem;
