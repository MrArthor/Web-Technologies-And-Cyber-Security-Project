import React from "react";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./Components/Notfound/Notfound";
import DishDetails from "./Components/DishDetails/DishDetails";
import CartReview from "./Components/CartReview/CartReview";
//
import { toast } from "react-toastify";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

toast.configure({
  autoClose: 1000,
  draggable: false,
});
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/review/cart" component={CartReview} />
          <Route exact path="/food/details/:keys" component={DishDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
