import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Payment({}) {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    errors: {},
  });

  const handleChange = (e) => {
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputFocus = (evt) => {
    setCardInfo((prev) => ({ ...prev, focus: evt.target.name }));
  };

  // Input card expiry onKeyUp handler
  const handleCardExpiry = (e) => {
    let expiryDate = e.target.value;

    if (e.keyCode !== 8) {
      if (expiryDate > 1 && expiryDate.length === 1) {
        expiryDate = "0" + expiryDate + "/";
      } else if (expiryDate.length === 2) {
        expiryDate = expiryDate + "/";
      }

      setCardInfo({ ...cardInfo, expiry: expiryDate });
    } else {
      setCardInfo({ ...cardInfo, expiry: "" });
    }
  };

  // Input onKeyDown numbers only handler
  const handleNumbersOnly = (e) => {
    let flag;

    if (
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      (e.keyCode === 16 && e.keyCode >= 9) ||
      e.keyCode === 37 ||
      e.keyCode === 39 ||
      e.keyCode === 46 ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      e.preventDefault();
    }
  };

  return (
    <fieldset className="text-white">
      <h2>SIKRE DIT KØB</h2>
      <div>
        <div>
          <Cards
            number={cardInfo.number}
            expiry={cardInfo.expiry}
            cvc={cardInfo.cvc}
            name={cardInfo.name}
            focused={cardInfo.focus}
          />
        </div>
        <div>
          <label htmlFor="number">
            Kortnummer
            <input
              unique="cardNumber"
              placeholder="Kort nummer"
              minLength={16}
              maxLength={16}
              name="number"
              id="number"
              value={cardInfo.number}
              onKeyDown={handleNumbersOnly}
              onChange={handleChange}
              onFocus={handleInputFocus}
              required
            />
          </label>

          <label htmlFor="name">
            Kortholder navn
            <input
              type="text"
              placeholder="Kortholder navn"
              name="name"
              id="name"
              autoComplete="true"
              minLength={2}
              value={cardInfo.name}
              onChange={handleChange}
              onFocus={handleInputFocus}
              required
            />
          </label>
          <div>
            <label htmlFor="expiry">
              Udløbsdato
              <input
                unique="cardExpiry"
                placeholder="MM/ÅÅ"
                maxLength="5"
                name="expiry"
                id="expiry"
                value={cardInfo.expiry}
                onKeyDown={handleNumbersOnly}
                onKeyUp={handleCardExpiry}
                onChange={handleChange}
                onFocus={handleInputFocus}
                required
              />
            </label>
            <label htmlFor="cvc">
              Kontrolcifre/CVC
              <input
                unique="cardCvc"
                placeholder="CVC"
                maxLength="4"
                name="cvc"
                id="cvc"
                value={cardInfo.cvc}
                onChange={handleChange}
                onFocus={handleInputFocus}
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 p-5"
          aria-disabled={
            cardInfo.number === "" ||
            cardInfo.name === "" ||
            cardInfo.expiry === "" ||
            cardInfo.cvc === ""
          }
        >
          Betal
        </button>
      </div>
    </fieldset>
  );
}

export default Payment;
