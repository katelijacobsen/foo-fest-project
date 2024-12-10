import { create } from "zustand";



const cartStore = create((set) => ({
  // create opretter vores zustand store. set er vores funktion til at update funktionens tilstand.
  // vores tilstand. Vi putter vores produkter ind i vores array.
  cart: [],
  visible : false,
  
//  const toggleCart = () => {
  toggleVisible: () => set((state) => ({
    visible : !state.visible
  })),
  
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product], // tilføjer vores produkt i vores array.
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId), //anvenver filter metode.
    })),

  clearCart: () => set({ cart: [] }), // Gør vores kurv tom.
}));

export default cartStore;


  // //Indhold til kurven
  // return (
  //   <section>
  //     <h3>Indkøbskurv</h3>
  //     <section>
  //       <h2>BILLETTER</h2>
  //       <ul>
  //         <li>
  //           <p>Billettype</p>
  //           <p>XXX kr</p>
  //         </li>
  //       </ul>
  //     </section>
  //     <section>
  //       <h2>CAMPING SPOT</h2>
  //       <ul>
  //         <li>
  //           <p>Billettype</p>
  //           <p>XXX kr</p>
  //         </li>
  //       </ul>
  //     </section>
  //     <section>
  //       <h2>OVERSIGT</h2>
  //       <ul>
  //         <li>
  //           <p>Billettype</p>
  //           <p>XXX kr</p>
  //         </li>
  //       </ul>
  //     </section>
  //   </section>
  // );
