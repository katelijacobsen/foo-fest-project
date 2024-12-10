import Form from "next/form";

export default function PaymentConfirmed({ data, formStatus }) {
  return (
    <Form>
      <h2>Ordre Bekræftelse</h2>
      
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>Navn</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data.guests.map((guest, i) => (
            <tr key={i}>
              <td>{guest.firstName}</td>
              <td>{guest.lastName}</td>
              <td>{guest.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        disabled={formStatus.pending}
        className="btn-primary"
      >
        {formStatus.pending ? "Sender..." : "Bekræft"}
      </button>
    </Form>
  );
}

//thead gruppere indholdet af tabellet
// tr står for table row
// th står for table header
// td står fortable table data