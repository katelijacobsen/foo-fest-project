//Vi skal bruge useState til at kunne køre det klientens side.
import { FiPlus, FiMinus } from "react-icons/fi";

const CounterInput = ({ count, setCount, max, name }) => {
  const addQuantity = () => {
    if (count === max) {
      return;
    }
    setCount(count + 1);

    console.log("get Count", count);
  };

  const subtractQuantity = () => {
    if (count - 1 < 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <label htmlFor="numberInput">
        <div className="flex item-center max-w-[8rem]">
          <button onClick={subtractQuantity} type="button" className="appearance-textfield bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-s-lg">
            <FiMinus />
          </button>
          <input name={name} value={count} onChange={() => {}} type="number" required className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-textfield disabled-none text-white text-center bg-gray-950 border-y border-gray-800 h-11 py-2.5 w-full" />
          <button onClick={addQuantity} type="button" className=" appearance-textfield bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-e-lg">
            <FiPlus />
          </button>
        </div>
      </label>
    </>
  );
};

export default CounterInput;
