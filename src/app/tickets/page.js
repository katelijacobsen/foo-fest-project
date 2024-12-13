// "use client";
// import ChooseTicket from "@/components/bookingsystem/ChooseTicket";
// import Campsite from "@/components/bookingsystem/Campsite";
// import ContactInfo from "@/components/bookingsystem/ContactInfo";
// import PaymentFlow from "@/components/bookingsystem/PaymentFlow";
// import PaymentComfirmed from "@/components/bookingsystem/PaymentConfirmed";
// import Cart from "@/components/bookingsystem/Cart";
// import { createContext, useActionState } from "react";
// import { Caesar_Dressing } from "next/font/google";
// import { useFormStatus } from "react-dom";
// import { useState } from "react";

// const ceasarDressing = Caesar_Dressing({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// // const resetForm = () => {
// //   formAction(new FormData()); // Tvinger state tilbage til defaultState ved at kalde formAction uden data
// // };

// const defaultState = {
//   step: 0,
//   tickets: {
//     single: 0,
//     vip: 0,
//   },
//   campsite: undefined,
//   tents: {
//     twoPeople: 0,
//     threePeople: 0,
//     greenCamping: false,
//   },
//   guests: {
//     single: [],
//     vip: [],
//   },
//   payment: {
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//   },
// };

// const handleStep = (prev, formData) => {
//   // const resetForm = () => {
//   //   formAction(new FormData());
//   // };
//   if (formData === null) {
//     return defaultState;
//   }
//   if (prev.step === 0) {
//     return {
//       ...prev,
//       step: prev.step + 1,
//       tickets: {
//         single: +formData.get("singleTickets"),
//         vip: +formData.get("vipTickets"),
//       },
//     };
//   }
//   if (prev.step === 1) {
//     console.log(formData.get("campsite"));

//     return {
//       ...prev,
//       step: prev.step + 1,
//       tents: {
//         twoPeople: +formData.get("twoPeople"),
//         threePeople: +formData.get("threePeople"),
//         greenCamping: formData.get("greenCamping"),
//       },
//       campsite: formData.get("campsite")
//     };
//   }
//   if (prev.step === 2) {
//     const singleGuests = Array.from(
//       { length: prev.tickets.single },
//       (_, i) => ({
//         firstName: formData.get(`single_firstName_${i}`),
//         lastName: formData.get(`single_lastName_${i}`),
//         email: formData.get(`single_email_${i}`),
//         phonenumber: formData.get(`single_phonenumber_${i}`),
//       })
//     );
//     const vipGuests = Array.from({ length: prev.tickets.vip }, (_, i) => ({
//       firstName: formData.get(`vip_firstName_${i}`),
//       lastName: formData.get(`vip_lastName_${i}`),
//       email: formData.get(`vip_email_${i}`),
//       phonenumber: formData.get(`vip_phonenumber_${i}`),
//     }));
//     return {
//       ...prev,
//       step: prev.step + 1,
//       guests: { single: singleGuests, vip: vipGuests },
//     };
//   }
//   if (prev.step === 3) {
//     return {
//       ...prev,
//       step: prev.step + 1,
//       payment: {
//         number: formData.get("number"),
//         name: formData.get("name"),
//         expiry: formData.get("expiry"),
//         cvc: formData.get("cvc"),
//       },
//     };
//   }
//   if (prev.step === 4) {
//     return {
//       ...prev,
//       step: prev.step + 1,
//     };
//   }
// };
// // Deler data uden at propdril fra Page. Så kan vi for adgang til vores data.
// export const CartContext = createContext(null);

// export default function Page() {
//   // useState til at kunne lave en global indkøbskurv på ticket site.
//   const defaultCart = {
//     tickets: {
//       single: 0,
//       vip: 0,
//     },
//     campsite: undefined,
//     tents: {
//       twoPeople: 0,
//       threePeople: 0,
//       greenCamping: false,
//     },
//   };
//   const [startDraw, setStartDraw] = useState(false);
//   const confirmPayment = () => {
//     setStartDraw(true);
//   };
//   //give det ned som værdi
//   const [cart, setCart] = useState(defaultCart);

//   const [state, formAction] = useActionState(handleStep, defaultState);
//   const formStatus = useFormStatus();

//   console.log(state);
//   //wrapper komponenter ind med useContext så det kan opdatere indkøbskurven
//   return (
//     <CartContext.Provider value={setCart}>
//       <main>
//         <h1
//           className={`${ceasarDressing.className} text-6xl sm:text-6xl lg:text-6xl md:text-6xl text-white`}
//         >
//           BILLETTER
//         </h1>
//         <div className="flex justify-center">
//           <section>
//             {state.step === 0 && <ChooseTicket formAction={formAction} />}
//             {state.step === 1 && (
//               <Campsite state={state} formAction={formAction} />
//             )}
//             {state.step === 2 && (
//               <ContactInfo tickets={state.tickets} formAction={formAction} />
//             )}
//             {state.step === 3 && <PaymentFlow formAction={formAction} />}
//             {state.step === 4 && (
//               <PaymentComfirmed state={state} formStatus={formStatus} startDraw={true} />
//             )}
//           </section>
//           {state.step !== 4 && (
//             <Cart cart={cart} />
//           )}
//         </div>
//       </main>
//     </CartContext.Provider>
//   );
// }
