// const url = "https://spring-awesome-stream.glitch.me/available-spots";
// // const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const headersList = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   //   apikey: apikey,
//   Prefer: "return=representation",
// };

// export async function getSpots() {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();
//   return data;
// }

// export async function postSub(postData) {
//   const fetchAvailableSpots = async () => {
//     // let response = await fetch("https://spring-awesome-stream.glitch.me/available-spots");
//     let response = await fetch("http://localhost:8080/available-spots");
//     let data = await response.json();
//     return data;
//   };
//   const availableSpots = await fetchAvailableSpots();
// }
