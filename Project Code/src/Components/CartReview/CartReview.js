/** @format */

import React, { useEffect, useState } from "react";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import demoData from "../../demoData";
import CartReviewItem from "../CartReviewItem/CartReviewItem";
import CartHidden from "../CartHidden/CartHidden";
import { Form, Button } from "react-bootstrap";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  const removeItem = (productKey) => {
    console.log("removed", productKey);
    const newRemoveCart = cart.filter((pd) => pd.keys !== productKey);
    setCart(newRemoveCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const getSavedDataFromLS = getDatabaseCart();
    const itemKeys = Object.keys(getSavedDataFromLS);
    
    const cartProducts = itemKeys.map((key) => {
      const product = demoData.find((fd) => fd.keys === key);
      // console.log(product)
      product.quantity = getSavedDataFromLS[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className='container py-5'>
      
      <div className='row'>
        <div className='col-md-4'>
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type='text' placeholder='A-10 Sector-62 Noida, Uttar Pradesh' />
              <Form.Label>Phone</Form.Label>
              <Form.Control type='number' placeholder='088' />
              <Form.Label>Delivery Details</Form.Label>
              <Form.Control as='textarea' rows='3' />
            </Form.Group>
            <Button className='btn btn-danger' size='lg' block>
              Save & Continue
            </Button>
          </Form>
        </div>
        <div className='col-md-5'>
          {
            <div>
              <div className=''>
                {cart.map((pd) => (
                  <CartReviewItem removeItem={removeItem} foodsToReview={pd}></CartReviewItem>
                ))}
              </div>
            </div>
          }
        </div>
        <div className='col-md-3'>
          <CartHidden cart={cart}></CartHidden>
        </div>
      </div>
    </div>
  );
};

export default CartReview;
