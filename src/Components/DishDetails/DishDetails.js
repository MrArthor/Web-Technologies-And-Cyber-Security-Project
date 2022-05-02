import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import demoData from "../../demoData";
import DishDetailsCard from "../DishDetailsCard/DishDetailsCard";
import CartHidden from "../CartHidden/CartHidden";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DishDetails = () => {
  const { keys } = useParams();
  const findDish = demoData.filter((find) => find.keys === keys);
  const [findDishDetails] = useState(findDish);
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
        findDishDetails.map((details) => (
          <DishDetailsCard
            key={details.keys}
            handleAddToCart={handleAddToCart}
            findDishDetails={details}
          ></DishDetailsCard>
        ))
        /**
         * findDishDetails.map - to find all details of {findDish}
         * sends data to 'DishDetailsCard' component
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

export default DishDetails;
