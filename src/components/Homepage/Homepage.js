import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';
/**
 * Homepage provides Home page design and things
 * these components only works in homepage
 */
const Homepage = () => {
    return (
        <div>
            <Banner  ></Banner>
            <Food></Food>
             <Banner Content={"Hello World"}></Banner> 

        </div>
    );
};

export default Homepage;