import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Volunteer from "@/components/festivalsystem/Volunteer";

export default async function Page() {
  return (
    <>
      <Header />
      <main>
        <Volunteer />
      </main>
      <Footer />
    </>
  );
}
