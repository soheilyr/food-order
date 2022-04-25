import React, { Fragment } from "react";
import styles from "./Header.module.css";
import ax from "../../assets/Img/sibzamini-ba-2-model-sos.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img style={{ width: "100%" }} src={ax} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
