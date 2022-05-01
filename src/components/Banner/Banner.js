/** @format */

import React from "react";
import "./Banner.css";
const Banner = (props) => {
  const UIContent = props.Content;
  return (
    <div>
      <section className='banner-area'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center content'>
              <h1>Best Food waiting for your belly</h1>
              <h1>{UIContent}</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
