import Laptop_Picture from '../assets/Macbook2@2x.webp';
import Phone_Picture from '../assets/iPhone2@2x.webp';
import Trumpet_Picture from '../assets/Trumpet@2x.webp';

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
                                media="(max-width:500px)"
                                width="193"
                                height="110"
                            />
                            <source
                                media="(min-width:500px)"
                                width="249"
                                height="142"
                            />
                            <source
                                media="(min-width:1000px)"
                                width="386"
                                height="220"
                            />
                        </picture>
                        <img
                            src={Laptop_Picture}
                            alt="Macbook picture"
                            className="img__macbook"
                        />
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
                                media="(max-width:500px)"
                                width="175"
                                height="135"
                            />
                            <source
                                media="(min-width:500px)"
                                width="262"
                                height="202"
                            />
                            <source
                                media="(min-width:1000px)"
                                width="350"
                                height="270"
                            />
                        </picture>
                        <img
                            src={Phone_Picture}
                            alt="Phone picture"
                            className="img__phone"
                        />
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
                            media="(max-width:500px)"
                            width="198"
                            height="139"
                        />
                        <source
                            media="(min-width:500px)"
                            width="276"
                            height="194"
                        />
                        <source
                            media="(min-width:1000px)"
                            width="276"
                            height="194"
                        />
                    </picture>
                    <img
                        src={Trumpet_Picture}
                        alt="Trumpet picture"
                        className="img__trumpet"
                    />
                </div>
            </div>
        </div>
    );
}

export default Benefits;
