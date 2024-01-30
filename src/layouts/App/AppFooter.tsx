import { Link } from "react-router-dom";
import FooterItem from "../../components/Others/FooterItem";
import { socialLinks } from "../../utils/constants";
import { Features } from "../../utils/constants";

const AppFooter = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0b0f17] font-chakra py-10">
        <div className="flex flex-row max-w-[1180px] mx-auto border-b-[1px] w-full border-primary justify-evenly">
          <div className="flex flex-col gap-2 items-center">
            <Link to="/starkmeta.ai" className="pr-1">
              <img src="/favicon.ico" alt="logo" />
            </Link>
            <Link to="/starkmeta.ai">
              <span className="text-[20px] font-semibold">StarkMeta</span>
              <span className="text-[20px] font-semibold text-deepPink pl-1">
                .Ai
              </span>
            </Link>
          </div>
          <div className="flex flex-col pb-5">
            {Features.map((item, index) => (
              <FooterItem item={item} key={index} />
            ))}
          </div>
          <div className="flex flex-col">
            {socialLinks.map((item, index) => (
              <FooterItem item={item} key={index} />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[22px] select-none font-medium">
              Get the App
            </span>
            <Link to="/" className="pt-4 hover:opacity-85">
              <img src="/assets/img/appstore.svg" alt="playstore" />
            </Link>
            <Link to="/" className="pt-4 hover:opacity-85">
              <img src="/assets/img/playstore.svg" alt="playstore" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row pt-5">
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Legal Notice</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">DMCA</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Terms of Service</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Cookie Policy</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
