import SingleBand from "@/components/festivalsystem/SingleBand";

const Band = async ({ params }) => {
  const slug = (await params).slug;
  let response = await fetch(`http://localhost:8080/bands/${slug}`);
  let data = await response.json();

  return (
    <section>
      <SingleBand band={data} />
    </section>
  );
};

export default Band;
