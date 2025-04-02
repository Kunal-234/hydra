import { useMediaQuery } from "react-responsive";
import arrowLong from "../assets/arrow-long.png";
import arrowRight from "../assets/arrowRight.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import HowtoMobile from "./HowtoMobile";

const Howto = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="max-width padding-x pt-10 pb-20 " id="howto">
      {/* Text Section */}
      <section className="flex flex-col xl:flex-row lg:flex-row items-center xl:text-left justify-between pb-20">
        <div>
          <h1 className="h1-style">How we build</h1>
          <div className="flex items-center pt-5 xl:pt-2">
            <h2 className="h2-style">with Hydra VR</h2>
            <img
              src={arrowLong}
              alt="arrow-long"
              className="arrow-long-icon arrow-hover "
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="p-style hidden xl:block lg:block">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </section>

      <section className="mx-auto justify-center mt-20 hidden xl:block lg:block md:block ">
        <div className="mx-auto gap-10  grid grid-cols-2 xl:grid-cols-4 ">
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={one} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <img
                src={arrowRight}
                alt="arrow-right"
                className="howto-arrow-image howto-arrow-icon arrow-hover"
              />
              <p className="howto-text">
                3D Conception
                <br /> & Design
              </p>
            </div>
          </div>
          <div className="how-to ">
            <div className="how-to-number-container">
              <img src={two} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <img
                src={arrowRight}
                alt="arrow-right"
                className="howto-arrow-image howto-arrow-icon arrow-hover"
              />
              <p className="howto-text">
                Interaction
                <br /> & Design
              </p>
            </div>
          </div>
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={three} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <img
                src={arrowRight}
                alt="arrow-right"
                className="howto-arrow-image howto-arrow-icon arrow-hover"
              />
              <p className="howto-text">
                VR World
                <br /> & Design
              </p>
            </div>
          </div>
          <div className="how-to">
            <div className="how-to-number-container">
              <img src={four} alt="" className="how-to-image" />
            </div>
            <div className="arrow-text-container">
              <img
                src={arrowRight}
                alt="arrow-right"
                className="howto-arrow-image howto-arrow-icon arrow-hover"
              />
              <p className="howto-text">
                Hydra VR
                <br /> & Design
              </p>
            </div>
          </div>
        </div>
      </section>

      {isMobile && <HowtoMobile />}
    </section>
  );
};

export default Howto;
