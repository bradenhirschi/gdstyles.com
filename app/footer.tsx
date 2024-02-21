import { BiLogoChrome, BiLogoGithub } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-100 flex gap-2 justify-center items-center">
      <a href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl">
        <BiLogoChrome className="w-[30px] h-[30px] text-secondary" />
      </a>
      <a href="https://github.com/bradenhirschi/gd-styles">
        <BiLogoGithub className="w-[30px] h-[30px] text-secondary" />
      </a>
    </footer>
  );
};

export default Footer;
