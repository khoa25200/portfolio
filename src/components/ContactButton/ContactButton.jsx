import "./ContactButton.css";
import Phone from "../../assets/phone.png";
import Zalo from "../../assets/zalo.png";
import Arrow from "../../assets/downarrow.png";

function ContactButton() {
  return (
    <div className="cta">
      <div className="ctaitem">
        <div className="ctabg" style={{ background: "#e67447" }} />
        <div className="ctaimg" style={{ background: "#e67447" }}>
          <a href="tel:0559732762" target='_blank'>
            <img width="30px" src={Phone} alt="Gọi điện" />
          </a>
        </div>
      </div>
      <div className="ctaitem">
        <div className="ctabg" style={{ background: "#e67447" }} />
        <div className="ctaimg" style={{ background: "#e67447" }}>
          <a href="https://zalo.me/0559732762" target='_blank'>
            <img width="50px" src={Zalo} alt="Chat Zalo" />
          </a>
        </div>
      </div>
      <div className="ctaitem">
        <div className="ctabg" style={{ background: "#e67447" }} />
        <div className="ctaimg" style={{ background: "#e67447" }}>
          <a href="#contact" target='_blank'>
            <img width="30px" src={Arrow} alt="Contact" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactButton;
