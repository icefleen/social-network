import React from "react";
import styles from "./Spinner.module.scss";
import classnames from "classnames";

const Spinner = () => {
  return (
    <div className={classnames(styles.wrapper)}>
      <div className={classnames(styles["lds-roller"])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
