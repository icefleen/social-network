import React from "react";
import styles from "./FormControls.module.scss";
import classnames from "classnames";

export const Input = ({ input, meta, isErrorPosVertical, ...props }) => {
  return (
    <div className={classnames(styles.wrapper)}>
      <input
        {...input}
        {...props}
        className={classnames(props.className, styles.input)}
      />
      <div
        className={classnames(
          styles.errorWrapper,
          meta.error && meta.submitFailed
            ? undefined
            : styles.errorWrapper_hidden
        )}
      >
        <div
          className={classnames(
            styles.errorMessage,
            isErrorPosVertical
              ? styles.errorMessage_top
              : styles.errorMessage_left
          )}
        >
          {meta.error}
        </div>
      </div>
    </div>
  );
};
