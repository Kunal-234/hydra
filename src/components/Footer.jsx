import FooterLogo from "../assets/logo-footer.png";
import FooterLine from "../assets/Footer-Line.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="max-width padding-x pt-10">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col  mx-auto">
        <div>
          <img src={FooterLogo} alt="" className="footer-logo" />
        </div>

        <img src={FooterLine} alt="" className="footer-line footer-hide" />

        <div className="footer-hide">
          <div className="footer-section">
          <Link to="about" > <p>About</p>  </Link> 
           <Link to="services">  <p>Services</p> </Link> 
           <Link to="technologies">   <p>Technology</p> </Link>
            <p>Join Hydra</p> 
          </div>
        </div>

        <img src={FooterLine} alt="" className="footer-line footer-hide" />

        <div className="footer-hide">
          <div className="footer-section">
            <p>F.a.q</p>
            <p>Sitemap</p>
            <p>Conditions</p>
            <p>Licenses</p>
          </div>
        </div>

        <img src={FooterLine} alt="" className="footer-line footer-hide" />

        <div className="footer-socials ">
          <p className="footer-section text-center pt-10">
            Socialize with hydra
          </p>
          <div className="flex gap-5 py-10 justify-center">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={pinterest} alt="" />
          </div>

          <button className="circle-gradient  p-5 w-full font-bold button-hover mx-auto uppercase">
            build your world
          </button>
        </div>
      </div>

      <div className="full-line" />
      <div>
        <p className="footer-credit">
          2024 &copy; Hydra landing page - UI Design By -Zine.E Falouti-
          Developed by ceejaydevlab - All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
