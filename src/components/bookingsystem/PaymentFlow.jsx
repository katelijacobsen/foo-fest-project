
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import { useRouter } from "next/navigation";


function Payment({formAction, resetForm}) {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    errors: {},
  });
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Tiden er udløbet");
      resetForm(); // Nulstil state til at starte fra step 1
      formAction(null); //refresh form
      return;
    }
    // Bruger setInterval, så vi kan planlægge at bruge vores callback hver forsinkelse i millisekunder.
    const timer = setInterval(() => {
      // Går ned i tiden.
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); //sætter 1000 som en værdi er bliver erstattet med tiden i useState.
    //Clean up. clearInterval stopper tiden. Så når den er på 0 skulle den gerne skifte router.
    return () => clearInterval(timer);
  }, [timeLeft, resetForm, router]);


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
}

export default Payment;
