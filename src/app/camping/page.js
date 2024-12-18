import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Camping from "@/components/festivalsystem/Camping";

export default async function Page() {
  return (
    <>
      <Header />
      <main>
        <Camping />
      </main>
      <Footer />
    </>
  );
}
