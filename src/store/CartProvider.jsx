import Cartcontext from "./Cartcontext";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updated_items = state.items.concat(action.item);
    // console.log(state.items);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updated_items,
      totalAmount: updatedTotalAmount,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dipatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToHandler = (item) => {
    dipatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCart = (id) => {
    dipatchCartAction({
      type: "DELETE",
      items: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToHandler,
    removeItem: removeItemFromCart,
  };

  console.log(cartContext);
  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};
export default CartProvider;
