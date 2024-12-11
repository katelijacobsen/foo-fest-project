"use client";
import PaymentFlow from "./PaymentFlow";
const BetalingsOplysninger = () => {
  return (
    <div>
      <h1>BETALINGSOPLYSNINGER</h1>
      <div>
        <div>
          <PaymentFlow></PaymentFlow>
        </div>
        <div>
          <script src="/bower_components/card-info/dist/card-info.min.js"></script>
          <form action="kortOplysninger">
            <label htmlFor="kortnummer">Kortnummer</label>
            <input required placeholder="1234 1234 1234 1234" type="number" />
            <label htmlFor="kortHolder"> Kortholder</label>
            <input required placeholder="Kortholder Navn" type="text" />
            <div>
              <label htmlFor="udløbsdato">Udløbsdato</label>
              <input required placeholder="MM/ÅÅ" type="text" />
              <label htmlFor="Kontrolcifre"> CVC</label>
              <input required placeholder="CVC" type="number" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetalingsOplysninger;
