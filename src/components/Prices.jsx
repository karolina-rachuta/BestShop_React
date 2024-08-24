function Prices() {
  return (
    <div className="prices__container">
      <div className="prices__hdl">Pricing</div>
      <div className="prices__packages">
        <div className="prices__package prices__package--basic">
          <div className="package__info">
            <p className="package__title">Basic</p>
            <h3 className="package__price package__price--basic">$0</h3>
          </div>
          <div className="package__description">
            <ul>
              <li>100 MB HDD</li>
              <li>1 Subdomain</li>
              <li>2 E-mails</li>
              <li>Two years license</li>
              <li>Full support</li>
            </ul>
            <button type="submit" className="btn btn--basic">
              Begin
            </button>
          </div>
        </div>
        <div className="prices__package prices__package--professional">
          <div className="package__info">
            <p className="package__title">Professional</p>
            <h3 className="package__price package__price--professional">$25</h3>
            <p className="package__offer">Limited offer</p>
          </div>
          <div className="package__description">
            <ul>
              <li>500 MB HDD</li>
              <li>2 Subdomains</li>
              <li>5 E-mails</li>
              <li>One year license</li>
              <li>Full support</li>
            </ul>
            <button type="submit" className="btn btn--professional">
              Begin
            </button>
          </div>
        </div>
        <div className="prices__package prices__package--premium">
          <div className="package__info">
            <p className="package__title">Premium</p>
            <h3 className="package__price package__price--premium">$60</h3>
            <p className="package__offer">Limited offer</p>
          </div>
          <div className="package__description">
            <ul>
              <li>2 GB HDD</li>
              <li>5 Subdomains</li>
              <li>20 E-mails</li>
              <li>Two years license</li>
              <li>Full support</li>
            </ul>
            <button type="submit" className="btn btn--premium">
              Begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
