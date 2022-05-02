/** @format */

import React from "react";
import { Card, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const DishDetailsCard = (props) => {
  const { keys, title, subtitle, description, img, catagories, price } = props.findDishDetails;
  return (
    <div className='container py-3 text-center'>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Img src={img} style={{ width: "150px" }}></Card.Img>
          <Card.Title className='display-5 text-secondary'>{title}</Card.Title>
          <Card.Text className='lead'>{description}</Card.Text>
          <Card.Text>Type : {catagories}</Card.Text>
          <Card.Text>Price : ${price}</Card.Text>
          <Button onClick={() => props.handleAddToCart(props.findDishDetails)} variant='outline-danger'>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DishDetailsCard;
