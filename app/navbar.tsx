import gdStylesLogo from "../public/gd-styles-logo.png";
import Image from "next/image";
import { BiLogoChrome, BiLogoGithub } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex flex-row p-8">
      <div className="flex items-center">
        <Image src={gdStylesLogo} alt="GD Styles logo" width={50} height={50} />
        <h1 className="ml-2 text-4xl tracking-tighter">STYLES</h1>
      </div>
      <div className="grow" />
      <div className="flex justify-center items-center">
        <a href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl">
          <BiLogoChrome className="w-[30px] h-[30px] text-secondary" />
        </a>
        <a href="https://github.com/bradenhirschi/gd-styles">
          <BiLogoGithub className="w-[30px] h-[30px] text-secondary" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
