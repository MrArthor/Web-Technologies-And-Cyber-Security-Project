/** @format */

import React, { useState } from "react";
import "./Dish.css";
import demoData from "../../demoData";
import DishCategory from "../DishCategory/DishCategory";

const Dish = () => {
  const data = demoData;
  const [foods] = useState(data);
  const [category, setCategory] = useState("lunch");
  const selectCategory = foods.filter((cat) => cat.catagories === category);
return (
    <div className='container food-header py-5'>
      <nav>
        <a onClick={() => setCategory("breakfast")}>Breakfast </a>
        <a onClick={() => setCategory("lunch")}>Lunch</a>
        <a onClick={() => setCategory("dinner")}>Dinner</a>
      </nav>
      <div className='container py-5'>
        <div className='row'>
          {selectCategory.map((item) => (
            <div className='col-md-4 py-3'>
              <DishCategory items={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dish;
