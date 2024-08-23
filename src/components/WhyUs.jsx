import PersonImage from "../assets/Person.svg";
import EyeImage from "../assets/Eye.svg";
import CatalogImage from "../assets/Catalog.svg";

function WhyUs() {
  return (
    <div className="whyus__container">
      <h2>The most popular sales platform in country</h2>
      <div className="icons__container">
        <div className="icon__box">
          <div className="icon__box--pink">
            <img src={PersonImage} alt="" className="person__icon" />
          </div>
          <p className="icon__number">100000+</p>
          <p className="person__lead icon__lead">daily entries</p>
        </div>
        <div className="icon__box">
          <div className="icon__box--blue">
            <img src={EyeImage} alt="" className="eye__icon" />
          </div>
          <p className="icon__number">2000000+</p>
          <p className="eye__lead icon__lead">seen products every day</p>
        </div>
        <div className="icon__box">
          <div className="icon__box--green">
            <img src={CatalogImage} alt="" className="catalog__icon" />
          </div>
          <p className="icon__number">10000+</p>
          <p className="icon__lead">added posts daily</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
