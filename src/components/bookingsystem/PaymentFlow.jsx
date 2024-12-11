import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

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
      {/* <form>
        <input type="text" name="number" placeholder="Card Number" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} aria-label="Indtast dit kortnummer" />
        <input type="text" name="name" placeholder="Navn" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        <input type="text" name="expiry" placeholder="MM/YY" value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
        <input type="text" name="cvc" placeholder="CVC" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
      </form> */}
      <form action="kortOplysninger">
        <label htmlFor="kortnummer">Kortnummer</label>
        <input name="number" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} required placeholder="1234 1234 1234 1234" type="number" />
        <label htmlFor="kortHolder"> Kortholder</label>
        <input name="name" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} required placeholder="Kortholder Navn" type="text" />
        <div>
          <label htmlFor="udløbsdato">Udløbsdato</label>
          <input name="expiry" value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} required placeholder="MM/ÅÅ" type="text" />
          <label htmlFor="Kontrolcifre"> CVC</label>
          <input name="cvc" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} required placeholder="CVC" type="number" />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
