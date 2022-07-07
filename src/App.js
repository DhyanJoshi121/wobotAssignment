import React from 'react';
import './app.scss';

const App = () => {
  const logHandler = () => {
    console.log('lcickaflkj');
  };
  return (
    <div className="app">
      <div className="bg-container">
        <div className="relative-container">
          <div className="abs-container"></div>
        </div>
      </div>
      <div className="hero">
        <div className="nav">
          <img src="./img/logo.png" className="logo" alt="" />
        </div>
        <div className="container">
          <div className="content-container">
            <div className="img-container">
              <img src="./img/logoLines.png" className="logoLines" alt="" />
            </div>
            <div className="title">It's a delight to have you onboard</div>
            <p>
              <span className="line1">Help us know you better</span>
              <span className="line2">
                (This is how we optimize Wobot as per your business needs)
              </span>
            </p>
            <div className="companyName-container">
              <label htmlFor="companyName">Company name</label>
              <input
                type="text"
                placeholder="e.g. Example inc"
                id="companyName"
              />
            </div>
            <div className="industry-container">
              <label htmlFor="industry">Industry</label>
              <select id="industry">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="IT">IT</option>
              </select>
            </div>
            <div className="companySize-container">
              <label>Company size</label>
              <div className="sizes">
                <input type="radio" name="something" id="1-10" />
                <label htmlFor="1-10">1-10</label>
                <input type="radio" name="something" id="21-50" />
                <label htmlFor="21-50">21-50</label>

                <input type="radio" name="something" id="51-200" />
                <label htmlFor="51-200">51-200</label>

                <input type="radio" name="something" id="201-500" />
                <label htmlFor="201-500">201-500</label>

                <input type="radio" name="something" id="500+" />
                <label htmlFor="500+">500+</label>
              </div>
            </div>
            <div className="button-container">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
