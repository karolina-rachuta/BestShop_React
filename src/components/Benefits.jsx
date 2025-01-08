import Laptop_Picture from '../assets/Macbook2@2x.webp';
import Laptop_Mobile from '../assets/Macbook2@2x_mobile.webp';
import Phone_Picture from '../assets/iPhone2@2x.webp';
import Phone_Mobile from '../assets/iPhone2@2x_mobile.webp';
import Trumpet_Picture from '../assets/Trumpet@2x.webp';
import Trumpet_Mobile from '../assets/Trumpet@2xmobile.webp';

function Benefits() {
    return (
        <div className="benefits__container" id="benefits">
            <div className="benefit__container">
                <div className=" benefit__column box__text box__text--laptop">
                    <h3>Be always first</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="benefit__column">
                    <div className="benefit__column--laptop">
                        <picture>
                            <source
                                media="(max-width:576px)"
                                srcSet={Laptop_Mobile}
                            />
                            <img
                                src={Laptop_Picture}
                                alt="Macbook picture"
                                className="img__macbook"
                                width="386"
                                height="220"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="benefit__container">
                <div className="benefit__column box__text box__text--phone">
                    <h3>Your shop is where you are!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="benefit__column benefit__column--reverse">
                    <div className="benefit__column--phone">
                        <picture>
                            <source
                                media="(max-width:576px)"
                                srcSet={Phone_Mobile}
                            />
                            <img
                                src={Phone_Picture}
                                alt="Phone picture"
                                className="img__phone"
                                width="350"
                                height="270"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="benefit__container benefit__container--trumpet">
                <div className="benefit__column box__text box__text--trumpet">
                    <h3>Increase recognition your brand!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="benefit__column benefit__column--trumpet">
                    <picture>
                        <source
                            media="(max-width:576)"
                            srcSet={Trumpet_Mobile}
                        />
                        <img
                            src={Trumpet_Picture}
                            alt="Trumpet picture"
                            className="img__trumpet"
                            width="276"
                            height="194"
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
