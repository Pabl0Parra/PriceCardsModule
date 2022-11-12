const Card = () => {
  const switchButton = document.getElementById("switch");
  const pricing_tags = document.querySelectorAll("p.price-number");
  const pricing_monthly = [24.99, 39.99];
  const pricing_annually = [249.99, 399.99];

  switchButton.onclick = () => {
    switchButton.classList.toggle("monthly");
    if (!switchButton.classList.contains("monthly")) {
      pricing_tags.forEach((pricing_tag, index) => {
        pricing_tag.textContent = `$${pricing_annually[index]} / year`;
      });
    } else {
      pricing_tags.forEach((pricing_tag, index) => {
        pricing_tag.textContent = `$${pricing_monthly[index]} / month`;
      });
    }
  };
  return (
    <div className="container">
      <header>
        <h1 className="text-xl text-gray">Our Pricing</h1>
        <div className="price-toggler">
          <p className="text-lightgray text-default">Annually</p>
          <div id="switch">
            <div className="switch-button"></div>
          </div>
          <p className="text-lightgray text-default">Monthly</p>
        </div>
      </header>
      <main>
        <div className="card card-white-bg">
          <img
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668188882/ODUwNzM3NDU1-removebg-preview_sfgvkt.png"
            alt="meditating woman"
          />
          <p className="plan text-small text-gray">Starter</p>
          <div className="price text-black text-xl">
            <p className="text-pureBlack">Free</p>
            {/* <p className="price-number text-xl"></p> */}
          </div>
          <ul className="features text-default text-gray">
            <li className="item">
              <span>&#x2713;</span>
              Full courses library
            </li>
            <li className="item">
              <span>&#x2713;</span>A new daily meditation
            </li>
            <li className="item">
              <span>&#x2713;</span>Access to the meditation guru
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Sleep podcasts and exercises
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Mindfulness exercises
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Guided meditations
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Cooking recipes
            </li>
          </ul>
          <div className="center-btn">
            <button className="btn btn-white text-small">
              <strong>Get started</strong>
            </button>
          </div>
        </div>
        <div className="card card-purple-bg">
          <img
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668190482/5184247-removebg-preview_urqwgn.png"
            alt="meditating woman"
          />
          <div className="price text-white">
            <p>Pro</p>
            <p className="price-number text-xl">$249.99 / year</p>
          </div>
          <ul className="features text-default text-white">
            <li className="item">
              <span>&#x2713;</span>Full courses library
            </li>
            <li className="item">
              <span>&#x2713;</span>A new daily meditation
            </li>
            <li className="item">
              <span>&#x2713;</span>Access to the meditation guru
            </li>
            <li className="item">
              <span>&#x2713;</span>Sleep podcasts and exercises
            </li>
            <li className="item">
              <span>&#x2713;</span>Mindfulness exerrcises
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Guided meditations
            </li>
            <li className="item-not-available">
              <span>&#x2713;</span>Cooking recipes
            </li>
          </ul>
          <div className="center-btn">
            <button className="btn btn-black text-small">Become a Pro</button>
          </div>
        </div>
        <div className="card card-white-bg">
          <img
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668190334/res-console.cloudinary-removebg-preview_1_kfcu6t.png"
            alt="meditating woman"
          />

          <div className="price text-black">
            <p>Teams</p>
            <p className="price-number text-pureBlack text-xl">
              $399.99 / year
            </p>
            {/* <p className="unit text-xl">              <strong>
                <span>&#36;</span>99
              </strong>
            </p> */}
          </div>
          <ul className="features text-default text-gray">
            <li className="item">
              <span>&#x2713;</span>Full courses library
            </li>
            <li className="item">
              <span>&#x2713;</span>A new daily meditation
            </li>
            <li className="item">
              <span>&#x2713;</span>Access to the meditation guru
            </li>
            <li className="item">
              <span>&#x2713;</span>Sleep podcasts and exercises
            </li>
            <li className="item">
              <span>&#x2713;</span>Mindfulness exerrcises
            </li>
            <li className="item">
              <span>&#x2713;</span>Guided meditations
            </li>
            <li className="item">
              <span>&#x2713;</span>Cooking recipes
            </li>
          </ul>
          <div className="center-btn">
            <button className="btn btn-blue text-small">
              <strong>Get Teams</strong>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution">
          <span class="footer-margin">Challenge by</span>
          <a
            href="hhttps://nuwe.io/dev/challenges/jump2digital2022-frontend"
            target="_blank"
          >
            Jump2Digital2022 Frontend Hackathon Entry - Nuwe
          </a>
          <span className="footer-margin">| Coded with ❤️ by</span>
          <a href="https://github.com/PabloParra">Pabl0Parra</a>
        </div>
      </footer>
    </div>
  );
};

export default Card;
