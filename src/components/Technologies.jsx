import { useMediaQuery } from "react-responsive";
import TechnologiesMobile from "./TechnologiesMobile";
import { FaChevronDown } from "react-icons/fa6";
import Unreal from "../assets/unreal-engine.png";
import Unity from "../assets/unity.png";
import Oculus from "../assets/oculus.png";
import Vive from "../assets/vive.png";

const Technologies = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className="max-width mx-auto padding-x pb-20" id="technologies">
      <div className="">
        {/* Desktop View Container */}
        <div className="technologies-image-bg p-10 rounded-full text-center">
          <h1 className=" h1-style  pt-4 ">Technologies & Hardware</h1>
          <h2 className="h2-style  pt-4 ">Used by Hydra VR.</h2>
          <div className=" relative top-[60px] hidden xl:block lg:block md:block">
            <FaChevronDown className="mx-auto circle-gradient text-5xl p-4 button-hover cursor-pointer " />
          </div>
        </div>
        {/* Logos */}
        <div className="mx-auto justify-center mt-20 hidden xl:block lg:block md:block ">
          <div className=" items-center w-full grid grid-cols-2 xl:grid-cols-4 ">
            <img src={Unreal} alt="" className="technologies-image" />
            <img src={Unity} alt="" className="technologies-image" />
            <img src={Oculus} alt="" className="technologies-image" />
            <img src={Vive} alt="" className="technologies-image" />
          </div>
        </div>
      </div>
      {isMobile && <TechnologiesMobile />}
    </section>
  );
};

export default Technologies;
