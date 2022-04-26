import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enterdedAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterdedAmountNumber < 1 ||
      enterdedAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterdedAmountNumber);
    console.log(enteredAmount);
  };
  return (
    <form className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "8",
          step: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsvalid && <p>please eneter a valid amount (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
