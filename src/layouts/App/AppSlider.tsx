import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import NavLink from "../../components/Others/NavLink";
import { Navigate } from "react-router-dom";

const AppSlider = () => {
  const [activeLink, setActiveLink] = useState("/app/");
  const { user, setUser }: any = useUser();
  const handleSetActiveLink = (path: string) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    setUser("none");
  };

  if (user === undefined || user === "none") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="hidden md:flex flex-col border-r border-primary bg-black w-[270px] min-w-[270px] pt-[10px]">
        <div className="pt-[19px] flex flex-row justify-center items-center">
          {/* <img src="./favicon.ico" className="w-6 h-6 mr-1" alt="logo" /> */}
          <h1 className="text-[24px] font-semibold font-chakra text-white">
            STARK.
          </h1>
          <h1 className="text-[24px] font-semibold font-chakra text-deepPink">
            AI
          </h1>
        </div>
        <div className="flex flex-col pt-10">
          <NavLink
            to="/app/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="mdi:home-outline"
            text="Home"
          />
          <NavLink
            to="/app/explore"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="ic:outline-wifi-find"
            text="Explore"
          />
          <NavLink
            to="/app/personal-feed/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="material-symbols:dashboard-outline"
            text="My Collections"
          />
          <NavLink
            to="/app/community-feed/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="heroicons:user-group-solid"
            text="Community Collections"
          />
          <NavLink
            to="/app/marketplace/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="simple-icons:shopify"
            text="Marketplace"
          />
        </div>
        <div className="flex flex-col pt-10">
          <span className="px-[14px] pb-2 text-[15px] font-chakra font-semibold text-fontPrimary">
            User Tools
          </span>
          <NavLink
            to="/app/image-generator/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="prime:images"
            text="Create Art"
          />
          <NavLink
            to="/app/text-generator/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="f7:pencil-outline"
            text="Texture Generation"
          />
        </div>
        <div className="flex flex-col pt-10">
          <NavLink
            to="/app/settings/"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={activeLink}
            icon="mingcute:user-setting-line"
            text="Settings"
          />
          <button
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
            onClick={handleLogout}
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="mynaui:logout" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Logout</span>
            </span>
          </button>
          <Link to="/app/settings/" className="text-white hover:bg-[#1b1c20]">
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-5">
              <Icon icon="carbon:user-avatar" className="w-7 h-7" />
              <span className="text-[15px] font-semibold font-chakra">
                Username
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppSlider;