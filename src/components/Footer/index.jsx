import "./footer.css";
import logo from "../../assets/images/logo.png";
import logoPlayStore from "../../assets/images/googleplay.png";
import logoAppStore from "../../assets/images/apple.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
  
      <div className="marca">
        <img src={logoPlayStore} alt="" />
        <img src={logoAppStore} alt="" />
      </div>
      <div className="copia">
         Reynaldo Contreras 
      </div>
    </div>
  );
};

export default Footer;
