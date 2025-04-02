import Unreal from "../assets/unreal-engine.png";
import Unity from "../assets/unity.png";
import Oculus from "../assets/oculus.png";
import Vive from "../assets/vive.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TechnologiesMobile = () => {
  return (
    <section className="pt-10 relative">
      <swiper-container
        navigation-next-el=".next-button"
        navigation-prev-el=".prev-button"
        pagination-clickable="true"
        pagination-dynamic-bullets="true"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
        center-slides="true"
        style={{
          "--swiper-pagination-color": "#8176af",
          "--swiper-pagination-bullet-size": "8px",
        }}
      >
        <swiper-slide>
          <img src={Unreal} alt="" className="technologies-image" />
        </swiper-slide>
        <swiper-slide>
          <img src={Unity} alt="" className="technologies-image" />
        </swiper-slide>
        <swiper-slide>
          <img src={Oculus} alt="" className="technologies-image" />
        </swiper-slide>
        <swiper-slide>
          {" "}
          <img src={Vive} alt="" className="technologies-image" />
        </swiper-slide>
      </swiper-container>
      <div className="nav-btn-technologies prev-button circle-gradient button-hover">
        <FaChevronLeft className="service-button-image text-lg" />
      </div>

      <div className="nav-btn-technologies next-button circle-gradient button-hover">
        <FaChevronRight className="service-button-image  text-lg" />
      </div>
    </section>
  );
};

export default TechnologiesMobile;
