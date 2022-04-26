import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hide={props.hide}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.hide} className={styles["button-alt"]}>
          close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
