import Image from "next/image";
import screenshot from "../public/screenshot.png";

const GdStyles = () => {
  return (
    <main>
      <section className="py-24 flex flex-col items-center">
        <h1 className="text-5xl font-bold">Good designers copy,</h1>
        <h1 className="text-5xl pb-2 pl-60 font-bold bg-clip-text bg-gradient-to-br from-blue-900 to-green-200 text-transparent">
          Great designers steal
        </h1>
        <h4 className="mt-2">- Pablo Picasso</h4>
        <div className="mx-44 mt-4">
          <Image
            src={screenshot}
            alt="screenshot of GD Styles in action"
            className="rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default GdStyles;
