/** @format */

import React from "react";
// import { Card ,Button} from "react-bootstrap";
import "./CartReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const CartReviewItem = (props) => {
  const { title, quantity, keys, img } = props.foodsToReview;
  return (
    <div className='container text-center cart-review'>
      <div className='row'>
        <div className='col-md-4 crd'>
          <img src={img} alt='' />
        </div>
        <div className='col-md-8'>
          <h5>
            {title}&nbsp;&nbsp; <br /> Quantity : {quantity}{" "}
            <a onClick={() => props.removeItem(keys)} href='#'>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </h5>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartReviewItem;
