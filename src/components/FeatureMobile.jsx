import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import location from "../assets/Location-Icon.png";
import phone from "../assets/phone-call.png";
import message from "../assets/mail.png";

const FeatureMobile = () => {
  return (
    <section className="slider-main-container gradient-circle shadow-sm mb-10 w-full items-center">
      <swiper-container
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
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
          <div className="swiper-slider">
            <img src={location} alt="" className="feature-image-mobile" />
            <p className="text-md text-light">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div className="swiper-slider">
            <img src={phone} alt="" className="feature-image-mobile" />
            <p className="text-md text-light">(110) 1111-1010</p>
          </div>
        </swiper-slide>

        <swiper-slide className="swiper-slider">
          <div className="swiper-slider">
            <img src={message} alt="" className="feature-image-mobile" />
            <p className="text-md text-light">Contact@HydraVTech.com</p>
          </div>
        </swiper-slide>

        {/* Navigations */}
      </swiper-container>
      <div className="nav-btn custom-prev-button">
        <CiCircleChevLeft className="text-2xl" />
      </div>

      <div className="nav-btn custom-next-button">
        <CiCircleChevRight className="text-2xl" />
      </div>
    </section>
  );
};

export default FeatureMobile;
