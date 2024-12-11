import React, { useState } from "react";
import Cards from "react-credit-cards-2";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div>
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <form>
        <input type="text" name="number" placeholder="Card Number" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} aria-label="Indtast dit kortnummer" />
        <input type="text" name="full-name" placeholder="Navn" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        <input type="text" name="expiry" placeholder="MM/YY" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        <input type="text" name="cvc" placeholder="CVC" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
      </form>
    </div>
  );
};

export default PaymentForm;
