import SingleBand from "@/components/festivalsystem/SingleBand";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const Band = async ({ params }) => {
  const slug = (await params).slug;
  let response = await fetch(`http://localhost:8080/bands/${slug}`);
  let data = await response.json();

  return (
    <section>
      <Header />
      <SingleBand band={data} />
      <Footer />
    </section>
  );
};

export default Band;
