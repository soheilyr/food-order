import { createContext } from "react";
const Cartcontext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default Cartcontext;
