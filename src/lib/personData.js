const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: apikey,
  Prefer: "return=representation",
};
export async function postSub(postData) {
  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(postData),
  });

  const data = await response.json();
  return data;
}
