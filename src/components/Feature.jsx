import location from "../assets/Location-Icon.png";
import phone from "../assets/phone-call.png";
import message from "../assets/mail.png";

const Feature = () => {
  return (
    <section>
      {/* Icon Container */}
      <div className="gradient-circle shadow-sm flex mt-16  w-full justify-between p-10 rounded-full ">
        {/* Icon 1 */}
        <div className="flex items-center gap-3 ">
          <img src={location} alt="location" className="feature-image" />
          <div>
            <h2 className="font-bold">Pay Us a Visit</h2>
            <p className="text-xs text-light">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </div>
        <div className="line" />
        {/* Icon 2 */}
        <div className="flex items-center gap-3">
          <img src={phone} alt="phone" className="feature-image" />
          <div>
            <h2 className="font-bold">Give Us a Call</h2>
            <p className="text-xs text-light">(110) 1111-1010</p>
          </div>
        </div>
        <div className="line" />
        {/* Icon 3 */}
        <div className="flex items-center pr-20 gap-3">
          <img src={message} alt="mail" className="feature-image" />
          <div>
            <h2 className="font-bold">Send Us a Message</h2>
            <p className="text-xs text-light">Contact@HydraVTech.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
