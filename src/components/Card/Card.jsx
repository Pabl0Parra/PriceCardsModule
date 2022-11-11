const Card = () => {
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
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668186622/5184247_n0rgg8.jpg"
            alt="meditating woman"
          />
          <p className="plan text-l text-gray">Starter</p>
          <div className="price text-black">
            <p className="price-number text-xl">
              <strong>Free</strong>
            </p>
          </div>
          <ul className="features text-default text-gray">
            <li className="item">
              <span>Full courses library</span>
            </li>
            <li className="item">
              <span>A new daily meditation</span>
            </li>
            <li className="item">
              <span>Access to the meditation guru</span>
            </li>
            <li className="item-not-available">
              <span>Sleep podcasts and exercises</span>
            </li>
            <li className="item-not-available">
              <span>Mindfulness exercises</span>
            </li>
            <li className="item-not-available">
              <span>Guided meditations</span>
            </li>
            <li className="item-not-available">
              <span>Cooking recipes</span>
            </li>
          </ul>
          <div className="btn btn-purple text-small">
            <button>Get started</button>
          </div>
        </div>
        <div className="card card-purple-bg">
          <img
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668186832/ODUwNzM3NDU1_gsp5lu.jpg"
            alt="meditating woman"
          />
          <p className="plan text-l text-white">Professional</p>
          <div className="price text-white">
            <p className="price-number text-xl">
              <strong>Pro</strong>
            </p>
            <p className="unit text-xxl">
              <strong>
                <span>&#36;</span>49
              </strong>
            </p>
          </div>
          <ul className="features text-default text-white">
            <li className="item">
              <span>Full courses library</span>
            </li>
            <li className="item">
              <span>A new daily meditation</span>
            </li>
            <li className="item">
              <span>Access to the meditation guru</span>
            </li>
            <li className="item">
              <span>Sleep podcasts and exercises</span>
            </li>
            <li className="item">
              <span>Mindfulness exerrcises</span>
            </li>
            <li className="item-not-available">
              <span>Guided meditations</span>
            </li>
            <li className="item-not-available">
              <span>Cooking recipes</span>
            </li>
          </ul>
          <div className="btn btn-white text-small">
            <button>Become a Pro</button>
          </div>
        </div>
        <div className="card card-white-bg">
          <img
            src="https://res.cloudinary.com/dcwx2biey/image/upload/v1668187017/9813_ipmq8w.jpg"
            alt="meditating woman"
          />
          <p className="plan text-l text-gray">Master</p>
          <div className="price text-black">
            <p className="price-number text-xl">
              <strong>Teams</strong>
            </p>
            <p className="unit text-xxl">
              <strong>
                <span>&#36;</span>99
              </strong>
            </p>
          </div>
          <ul className="features text-default text-gray">
            <li className="item">
              <span>Full courses library</span>
            </li>
            <li className="item">
              <span>A new daily meditation</span>
            </li>
            <li className="item">
              <span>Access to the meditation guru</span>
            </li>
            <li className="item">
              <span>Sleep podcasts and exercises</span>
            </li>
            <li className="item">
              <span>Mindfulness exerrcises</span>
            </li>
            <li className="item">
              <span>Guided meditations</span>
            </li>
            <li className="item">
              <span>Cooking recipes</span>
            </li>
          </ul>
          <div className="btn btn-purple text-small">
            <button>Get Teams</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by
          <a
            href="hhttps://nuwe.io/dev/challenges/jump2digital2022-frontend"
            target="_blank"
          >
            JumpToDigital2022 Hackathon entry
          </a>
          || Coded with ❤️
          <a href="https://github.com/PabloParra">Pabl0Parra</a>.
        </div>
      </footer>
    </div>
  );
};

export default Card;
