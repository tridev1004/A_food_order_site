import { useContext } from "react";
import Cartcontext from "../../../Store/Cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const CartCtx = useContext(Cartcontext);
  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <div>
        {" "}
        <MealItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
