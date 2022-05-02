import React from "react";
import { Card } from "react-bootstrap";
import "./DishCategory.css";
import { Link } from "react-router-dom";

const DishCategory = (props) => {
  const { keys,title, subtitle, img, catagories, price } = props.items;
  return (
    <div className="food-cat-card">
      <Card>
        <Card.Body>
          <Card.Img variant="top w-50 py-3" src={img} />
          <Card.Title>
            <Link to={"/food/details/"+keys}>{title}</Link>
          </Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Text>Type : {catagories}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DishCategory;
