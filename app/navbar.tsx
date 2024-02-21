import gdStylesLogo from "../public/gd-styles-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row pt-8 px-16">
      <div className="flex items-center">
        <Image src={gdStylesLogo} alt="GD Styles logo" width={50} height={50} />
        <div className="ml-2 text-4xl tracking-tighter">STYLES</div>
      </div>
      <div className="grow" />
      <a className="p-4 border hover:bg-slate-200 rounded-xl" href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl">
        Download
      </a>
    </nav>
  );
};

export default Navbar;
