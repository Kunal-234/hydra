import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { CgClose } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  // React Responsive useMediaQuery
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //add eventListener
    window.addEventListener("scroll", handleScroll);

    //remove event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-bgColor py-5" : "bg-bgColor py-5"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center padding-x">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img src={Logo} alt="logo" width={130} height={100} />
          </Link>
          {/* Mobile Menu  */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <CgClose className="text-5xl text-light" />
            ) : (
              <CgMenuRightAlt className="text-5xl text-light " />
            )}
          </div>
        </div>

        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-6 xl:py-0 xl:px-0 "
              : "max-h-0 xl:max-h-max "
          }flex flex-col  w-full xl:bg-transparent gap-y-6 overflow-hidden text-sm font-bold xl:font-semibold xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:pb-0 transition-all duration-150 text-center xl:text-left  xl:text-[13px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer uppercase hover:text-secondary"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
          <Link
            className="cursor-pointer uppercase hover:text-secondary"
            to="services"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Services
          </Link>
          <Link
            className="cursor-pointer uppercase hover:text-secondary"
            to="technologies"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Technologies
          </Link>
          <Link
            className="cursor-pointer uppercase hover:text-secondary"
            to="howto"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            How To
          </Link>
          <div className="xl:hidden flex flex-col ">
            <div className="flex flex-col w-80 mx-auto  gap-5 font-semibold">
              <Link
                className="border-2 cursor-pointer bg-gradient-linear uppercase px-8 py-4 rounded-full text-sm hover:border-secondary hover:text-secondary"
                to="contactus"
                activeClass="active"
                smooth={desktopMode}
                spy={true}
                onClick={() => setNav(!nav)}
              >
                Contact Us
              </Link>

              <button
                className="bg-gradient-to-r from-secondary to-light uppercase text-sm px-8 py-4 rounded-full text-bgColor hover:text-white"
                onClick={() => setNav(!nav)}
              >
                Join Hydra
              </button>
            </div>
          </div>
        </nav>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          <div className="flex gap-10 w-full font-semibold">
            <Link
              className="border-2 cursor-pointer bg-gradient-linear uppercase px-8 py-4 rounded-full text-sm hover:border-secondary hover:text-secondary"
              to="contactus"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              Contact Us
            </Link>
            <button className="bg-gradient-to-r from-secondary to-light uppercase text-sm px-8 py-4 rounded-full text-bgColor hover:text-white ">
              Join Hydra
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
