import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import Cartcontext from "../../store/Cartcontext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const orders = useContext(Cartcontext);
  console.log("thats the orders : ", orders);
  const countItem = orders.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    orders.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    let newFood = { ...item };
    newFood.amount = 1;
    orders.addItem(newFood);
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {orders.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal hide={props.hide}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{orders.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.hide} className={styles["button-alt"]}>
          close
        </button>
        {countItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
