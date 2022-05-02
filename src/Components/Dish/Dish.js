/** @format */

import React, { useState } from "react";
import "./Dish.css";
import demoData from "../../demoData";
import DishCategory from "../DishCategory/DishCategory";
/**
 * Dish component to find foods according to category
 */
const Dish = () => {
  const data = demoData;
  const [foods] = useState(data);
  const [category, setCategory] = useState("lunch");
  const selectCategory = foods.filter((cat) => cat.catagories === category);
  /**
   * {selectCategory} to filter food accord to category from {category}
   */
  return (
    <div className='container food-header py-5'>
      {/* nav {onClick} to select food cards accord to category */}
      <nav>
        <a onClick={() => setCategory("breakfast")}>Breakfast </a>
        <a onClick={() => setCategory("lunch")}>Lunch</a>
        <a onClick={() => setCategory("dinner")}>Dinner</a>
      </nav>
      <div className='container py-5'>
        <div className='row'>
          {selectCategory.map((item) => (
            <div className='col-md-4 py-3'>
              {/* <DishCategory/> food card design */}
              <DishCategory items={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dish;
