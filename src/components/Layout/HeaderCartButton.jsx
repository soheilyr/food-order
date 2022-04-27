import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import Cartcontext from "../../store/Cartcontext";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [cartScale, setCartScale] = useState(false);
  let cardCTX = useContext(Cartcontext);

  let numberOfCartItem = cardCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (cardCTX.items.length === 0) {
      return;
    }
    setCartScale(true);
    let timer = setTimeout(() => {
      setCartScale(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cardCTX.items]);
  return (
    <button
      className={`${classes.button} ${cartScale ? classes.bump : " "} `}
      onClick={props.show}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
