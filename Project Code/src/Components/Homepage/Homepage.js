import React from 'react';
import HomeBanner from '../Banner/Banner';
import Dish from '../Dish/Dish';

const Homepage = () => {
    return (
        <div>
            <HomeBanner Content={" To Eat Is A Necessity, But To Eat Intelligently Is An Art. "}></HomeBanner>
            <Dish></Dish>
             <HomeBanner Content={"If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars  "}></HomeBanner> 

        </div>
    );
};

export default Homepage;