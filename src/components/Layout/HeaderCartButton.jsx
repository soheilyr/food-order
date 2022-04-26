import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import Cartcontext from "../../store/Cartcontext";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  let cardCTX = useContext(Cartcontext);

  let numberOfCartItem = cardCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.show}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
