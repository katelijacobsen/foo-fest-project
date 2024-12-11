import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = ({ formAction, resetForm, router }) => {
    const [ timeLeft, setTimeLeft] = useState(300)
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  useEffect(() => {
    if(timeLeft <= 0 ){
        alert("Tiden er udløbet. du bliver stillet tilbage til billetsiden.");
        resetForm();
        formAction(null);
        return;
    }
    const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime -1);
    }, 1000);
  }, [timeLeft, resetForm, router]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
   <p> Tid tilbage: {Math.floor(timeLeft / 60)} : {String(timeLeft % 60).padStart(2, "0")}</p>
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <form action="kortOplysninger">
        <label htmlFor="kortnummer">Kortnummer</label>
        <input
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
          name="name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          placeholder="Kortholder Navn"
          type="text"
        />
        <div>
          <label htmlFor="udløbsdato">Udløbsdato</label>
          <input
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
    </div>
    </>
  );
};

export default PaymentForm;
