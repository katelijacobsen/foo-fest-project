const url = "https://cwhdfybelixklhkkgwhq.supabase.co/rest/v1/subscribtions";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3aGRmeWJlbGl4a2xoa2tnd2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MzQ3ODYsImV4cCI6MjA0ODExMDc4Nn0.Rh3FiAeWBLC--MXyVX7dYuYgkDdVgjNqGdWZcp1mKXA";
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
