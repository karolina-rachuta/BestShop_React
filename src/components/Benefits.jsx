import Laptop_Picture from "../assets/Macbook2@2x.png";
import Phone_Picture from "../assets/iPhone2@2x.png";
import Trumpet_Picture from "../assets/Trumpet@2x.png";

function Benefits() {
  return (
    <div className="benefits__container">
      <div className="benefit__container">
        <div className="benefit__column benefit__column--left">
            <h3>Be always first</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="benefit__column">
          <div className="benefit__column--laptop"><img src={Laptop_Picture} alt="Macbook picture" className="img__macbook"/></div>
        </div>
      </div>
      <div className="benefit__container">
        <div className="benefit__column benefit__column--left">
            <h3>Your shop is where you are!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="benefit__column benefit__column--phone">
          <img src={Phone_Picture} alt="Phone picture" className="img__phone"/>
        </div>
      </div>
      <div className="benefit__container">
        <div className="benefit__column benefit__column--left">
            <h3>Increase recognition your brand!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="benefit__column benefit__column--right">
          <img src={Trumpet_Picture} alt="Trumpet picture"className="img__trumpet"/>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
