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
            <Banner Content={" To Eat Is A Necessity, But To Eat Intelligently Is An Art. "}></Banner>
            <Food></Food>
             <Banner Content={"If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars  "}></Banner> 

        </div>
    );
};

export default Homepage;