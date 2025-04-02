import service1 from "/service-image1.png";
import service2 from "/service-image2.png";
import service3 from "/service-image3.png";
import service4 from "/service-image4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServiceCardMobile = () => {
  return (
    <section className="relative px-5 mx-auto pb-20">
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
          <div className=" gradient-circle items-center text-center p-5 rounded-[30px] ">
            <img src={service1} alt="" className="services-image mx-auto" />
            <h2 className="services-h2 mt-5">Simulation</h2>
            <div className="line-card" />
            <p className="p-style text-center">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="button-gradient button-hover uppercase mx-auto">
              Try it now
            </button>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div className="gradient-circle items-center text-center p-5 rounded-[30px] ">
            <img src={service2} alt="" className="services-image mx-auto" />
            <h2 className="services-h2 mt-5">Education</h2>
            <div className="line-card" />
            <p className="p-style text-center">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="button-gradient button-hover uppercase mx-auto">
              Try it now
            </button>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div className="gradient-circle items-center text-center p-5 rounded-[30px] ">
            <img src={service3} alt="" className="services-image mx-auto" />
            <h2 className="services-h2 mt-5">self-care</h2>
            <div className="line-card" />
            <p className="p-style text-center">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="button-gradient button-hover uppercase mx-auto">
              Try it now
            </button>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div className=" gradient-circle items-center text-center p-5 rounded-[30px] ">
            <img src={service4} alt="" className="services-image mx-auto" />
            <h2 className="services-h2 mt-5">outdoor</h2>
            <div className="line-card" />
            <p className="p-style text-center">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="button-gradient button-hover uppercase mx-auto">
              Try it now
            </button>
          </div>
        </swiper-slide>

        {/* Navigations */}
      </swiper-container>
      <div className="nav-btn-service custom-prev-button">
        <FaChevronLeft className="service-button-image text-lg" />
      </div>

      <div className="nav-btn-service custom-next-button">
        <FaChevronRight className="service-button-image  text-lg" />
      </div>
    </section>
  );
};

export default ServiceCardMobile;
