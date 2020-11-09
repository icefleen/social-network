import React from "react";
import styles from "./ProfileAbout.module.scss";
import classnames from "classnames";

const ProfileAbout = (props) => {
  return (
    <div className={classnames(props.className, styles.about)}>
      <h3 className={classnames(styles.about__title)}>About me</h3>
      <ul className={classnames(styles.about__list)}>
        <li className={classnames(styles.about__item)}>
          <span className={classnames(styles.about__key)}>From: </span>
          <span className={classnames(styles.about__value)}>Saratov</span>
        </li>
        <li className={classnames(styles.about__item)}>
          <span className={classnames(styles.about__key)}>Birth date: </span>
          <span className={classnames(styles.about__value)}>25 Jul 2020</span>
        </li>
        <li className={classnames(styles.about__item)}>
          <span className={classnames(styles.about__key)}>Education: </span>
          <span className={classnames(styles.about__value)}>SSTU '22</span>
        </li>
        <li className={classnames(styles.about__item)}>
          <span className={classnames(styles.about__key)}>Web Site: </span>
          <span className={classnames(styles.about__value)}>
            https://github.com/icefleen
          </span>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(ProfileAbout);
