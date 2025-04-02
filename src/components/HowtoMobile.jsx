import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const HowtoMobile = () => {
  return (
    <section className="relative ">
      <swiper-container
        navigation-next-el=".number-next-button"
        navigation-prev-el=".number-prev-button"
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
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={one} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <p className="howto-text">
                3D Conception
                <br /> & Design
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div className="how-to ">
            <div className="how-to-number-container">
              <img src={two} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <p className="howto-text">
                Interaction
                <br /> & Design
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className="swiper-slider">
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={three} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <p className="howto-text">
                VR World
                <br /> & Design
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className="swiper-slider">
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={four} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <p className="howto-text">
                Hydra VR
                <br /> & Design
              </p>
            </div>
          </div>
        </swiper-slide>

        {/* Navigations */}
      </swiper-container>
      <div className="how-to-button number-prev-button">
        <FaChevronLeft className="text-2xl" />
      </div>

      <div className="how-to-button number-next-button">
        <FaChevronRight className="text-2xl" />
      </div>
    </section>
  );
};

export default HowtoMobile;
