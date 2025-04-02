import arrowLong from "../assets/arrow-long.png";
import { ServiceCard, ServiceCardMobile } from "./index";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 }); // xl and lg
  const isMobile = useMediaQuery({ maxWidth: 991 }); // md and sm

  return (
    <>
      <section className="max-width padding-x mx-auto" id="services">
        <div className="flex flex-col xl:flex-row lg:flex-row items-center xl:text-left justify-between pb-20">
          {/* Text  */}
          <div>
            <h1 className="h1-style">why build </h1>
            <div className="flex items-center pt-5 xl:pt-2">
              <h2 className="h2-style">with hydra?</h2>
              <img
                src={arrowLong}
                alt="arrow-long"
                className="arrow-long-icon arrow-hover "
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="p-style hidden xl:block lg:block">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>

        {isDesktop && <ServiceCard />}
        {isMobile && <ServiceCardMobile />}
      </section>
    </>
  );
};

export default Services;
