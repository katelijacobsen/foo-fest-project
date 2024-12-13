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
        <div>
          <p className="pb-1 text-lg md:text-xl">{questionOne}</p>
          <p className="pb-1 text-lg md:text-xl">{questionTwo}</p>
          <p className="pb-1 text-lg md:text-xl">{questionThree}</p>
          <p className="pb-1 text-lg md:text-xl">{questionFour}</p>
        </div>
        <div>{isOpen == item ? <FiMinus className="place-items-center w-5 h-5 text-white" /> : <GoPlus className=" w-5 h-5 text-white" />}</div>
      </button>
      {isOpen == item && (
        <div className="">
          <p className="text-lg md:text-xl"> {textOne}</p>
          <p className="text-lg md:text-xl"> {textTwo}</p>
          <p className="text-lg md:text-xl"> {textThree}</p>
          <p className="text-lg md:text-xl"> {textFour}</p>
        </div>
      )}
    </li>
  );
};

export default Accordionitem;
