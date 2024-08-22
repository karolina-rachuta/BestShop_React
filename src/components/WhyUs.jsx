import PersonImage from "../assets/Person.svg";
import EyeImage from "../assets/Eye.svg";
import CatalogImage from "../assets/Catalog.svg";

function WhyUs() {
  return (
    <div className="whyus__container">
      <h2>The most popular sales platform in country</h2>
      <div className="icons__container">
        <div>
          <img src={PersonImage} alt="" />
          <p>100000+</p>
        </div>
        <div>
          <img src={EyeImage} alt="" />
          <p>2000000+</p>
        </div>
        <div>
          <img src={CatalogImage} alt="" />
          <p>10000+</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
