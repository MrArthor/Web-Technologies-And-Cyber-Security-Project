/** @format */

import React from "react";
import "./Banner.css";
const HomeBanner = (props) => {
  const UIContent = props.Content;
  const UIFooter = props.Footer;
  return (
    <div>
      <section className='banner-area'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center content'>
              <h1>{UIContent}</h1>
              <br />
              <br />
              {UIFooter}
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
