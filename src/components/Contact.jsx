function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__column contact__column--left">
        <h2>Any questions?</h2>
        <p className="contact__lead">Leave your email address or call us!</p>
        <div className="contact__details">
          <p className="contact__email">info@bestshop.xyz</p>
          <p className="contact__phone">123 456 789</p>
        </div>
      </div>
      <div className="contact__column contact__column--right">
        <label htmlFor="name" className="contact__label">NAME</label>
        <input type="text" id="name" />
        <label htmlFor="email" className="contact__label">EMAIL</label>
        <input type="text" id="email" />
        <div className="contact__checkbox">
          <input type="checkbox" id="checkbox"/>
          <label htmlFor="checkbox">
            I hereby give consent for my personal data included in my application
            to be processed for the purposes of the recruitment process under the
            European Parliament’s and Council of the European Union Regulation on
            the Protection of Natural Persons as of 27 April 2016, with regard to
            the processing of personal data and on the free movement of such data,
            and repealing Directive 95/46/EC (Data Protection Directive)
          </label>
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
