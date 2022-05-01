import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import demoData from "../../demoData";
import FoodDetailsCard from "../FoodDetailsCard/FoodDetailsCard";
import CartHidden from "../CartHidden/CartHidden";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodDetails = () => {
  const { keys } = useParams();
  const findFood = demoData.filter((find) => find.keys === keys);
  const [findFoodDetails] = useState(findFood);
  const [cart,setCart] = useState([]);
 
  const notify = () => toast("Item added to cart!");
  useEffect(()=>{
const getSavedDataFromLS = getDatabaseCart();
const itemKeys = Object.keys(getSavedDataFromLS);

const cartProducts = itemKeys.map((key) => {
  const product = demoData.find((fd) => fd.keys === key);
  product.quantity = getSavedDataFromLS[key];
  return product;
});
setCart(cartProducts);
  },[])

const handleAddToCart = (foodItem) => {
  const productToBeAdded = foodItem.keys;
  const sameProduct = cart.find(item=>item.keys===productToBeAdded);
  let count = 1;
  let newCart;
  if(sameProduct){
    notify();
    count = sameProduct.quantity+1;
    sameProduct.quantity=count;
    const others = cart.filter ((item=>item.keys!==productToBeAdded));
    newCart=[...others,sameProduct];
  }else{
    notify();
    foodItem.quantity = 1;
    newCart=[...cart,foodItem];
  }
  setCart(newCart)
  addToDatabaseCart(foodItem.keys,count);
 };
  return (
   <div className="py-5">
      <div className="food-details-container float-left">
      {
        findFoodDetails.map((details) => (
          <FoodDetailsCard
            key={details.keys}
            handleAddToCart={handleAddToCart}
            findFoodDetails={details}
          ></FoodDetailsCard>
        ))
        /**
         * findFoodDetails.map - to find all details of {findFood}
         * sends data to 'FoodDetailsCard' component
         */
      }
    </div>
   <div style={{display:'none'}}>
   <div className="cart-hidden-container float-right">
        <CartHidden cart={cart}></CartHidden>
    </div>
   </div>
   </div>
  );
};

export default FoodDetails;
