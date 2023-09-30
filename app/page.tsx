import Navbar from "./navbar";

const GdStyles = () => {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-2 px-4 md:px-16 lg:px-40 py-8">
        <div>
          <h1>“Good designers copy, great designers steal.”</h1>
          <h2>- Pablo Picasso</h2>
        </div>
      </section>
    </main>
  );
};

export default GdStyles;
