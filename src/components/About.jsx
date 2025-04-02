import arrowLong from "../assets/arrow-long.png";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="max-width padding-x pt-20 pb-20" id="about">
      {/* Text Section */}
      <section className="flex flex-col xl:flex-row lg:flex-row items-center xl:text-left justify-between pb-20">
        <div>
          <h1 className="h1-style">Introduction</h1>
          <div className="flex items-center pt-5 xl:pt-2">
            <h2 className="h2-style">To Hydra VR</h2>
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

      {/* Image and Text Section  */}
      <section className="about-section ">
        {/* Image */}
        <div>
          <img src={aboutImage} alt="about-image" className="about-image" />
        </div>
        {/* Text */}
        <div className="w-full xl:w-1/2 lg:w-1/2 ">
          <div className="hidden xl:block lg:block">
            <h1 className="h1-style pb-2">About</h1>
            <h2 className="h2-style">Hydra VR</h2>
          </div>
          <div>
            <p className="p-style py-10">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
          </div>
          <button className="button-gradient button-hover">
            Lets Get in touch
          </button>
        </div>
      </section>
    </section>
  );
};

export default About;
