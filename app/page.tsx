import Image from 'next/image';
import screenshot from '../public/screenshot.png';
import { BiLogoChrome, BiLogoEdge, BiLogoFirefox, BiLogoOpera } from "react-icons/bi";

const GdStyles = () => {
  return (
    <main>
      <section className="py-12 flex flex-col items-center">
          <h1>
          Good designers copy,{' '}
          <span className="bg-clip-text bg-gradient-to-br from-blue-900 to-green-200 text-transparent">
            great designers steal
          </span>
        </h1>
        <h4 className="mt-4 text-gray-700">- Pablo Picasso</h4>
        <div className="mx-44 mt-12">
          <Image
            src={screenshot}
            alt="screenshot of GD Styles in action"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="bg-slate-100 grid grid-cols-2 py-24">
        <div></div>
        <div>
          <h2 className="font-bold mb-4">How it works</h2>
          <ol className="list-decimal text-xl font-light space-y-8">
            <li>Right click on an element with styles you like</li>
            <li>Click &apos;Get Tailwind styles&apos;</li>
            <li>Copy generated styles from DevTools</li>
          </ol>
        </div>
      </section>
      <section className="flex flex-col py-32 items-center">
        <h2>Platforms</h2>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <div>
            <a href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl">
              <BiLogoChrome className="h-24 w-24 text-secondary" />
            </a>
          </div>
          <div>
            <a href="https://www.microsoft.com/en-us/edge">
              <BiLogoEdge className="h-24 w-24 text-secondary" />
            </a>
          </div>
          <div>
            <a href="https://www.mozilla.org/en-US/firefox/new/">
              <BiLogoFirefox className="h-24 w-24 text-secondary" />
            </a>
          </div>
          <div>
            <a href="https://www.opera.com/">
              <BiLogoOpera className="h-24 w-24 text-secondary" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GdStyles;
