import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = ({ formAction, resetForm, router }) => {
  // const [ timeLeft, setTimeLeft] = useState(60)
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  //   useEffect(() => {
  //     if(timeLeft <= 0 ){
  //         alert("Tiden er udløbet. du bliver stillet tilbage til billetsiden.");
  //         resetForm();
  //         formAction(null);
  //         return;
  //     }
  //     const timer = setInterval(() => {
  //         setTimeLeft((prevTime) => prevTime -1);
  //     }, 1000);
  //   }, [timeLeft, resetForm, router]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  //{Math.floor(timeLeft / 60)} : {String(timeLeft % 60).padStart(2, "0")}
  return (
    <>
      <p className="bg-customRed text-black w-full text-center text-2-xl font-bold"> Tid tilbage: 00:00</p>
      <div className="flex flex-col items-center justify-center border border-gray-600 p-2 rounded-lg bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack">
      <h2 className="text-3xl my-4">Betalingsoplysninger</h2>
        <div className="w-12">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name} 
          focused={state.focus}
          />
          </div>

        <form action="kortOplysninger" className="flex flex-col items-center">
          <div className="flex flex-col">
            <label htmlFor="kortnummer" className="font-bold text-md">Kortnummer</label>
            <input
              className="p-2 rounded-md w-full text-black border-2"
              name="number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              placeholder="1234 1234 1234 1234"
              type="number"
            />
            <label htmlFor="kortHolder"> Kortholder</label>
            <input
              className="p-2 rounded-md w-full text-black border-2"
              name="name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              placeholder="Kortholder Navn"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="udløbsdato">Udløbsdato</label>
            <input
              className="p-2 rounded-md w-full text-black border-2"
              name="expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              placeholder="MM/ÅÅ"
              type="text"
            />
            <label htmlFor="Kontrolcifre"> CVC</label>
            <input
              className="p-2 rounded-md w-full text-black border-2"
              name="cvc"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              placeholder="CVC"
              type="number"
            />
          </div>
        </form>
        <button className="bg-red-500 p-4 m-4">Afslut & Betal</button>
      </div>
    </>
  );
};

export default PaymentForm;
