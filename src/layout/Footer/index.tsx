// import React from "react";;

import styles from "./Footer.module.css";
import { Typography } from "../../components";
import MyLink from "../../components/Link";
import { Comment } from "../../components/Input";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.links}>
          <MyLink to="https://github.com/abdurahmonST/yandex-map-project">
            GitHub
          </MyLink>
          <MyLink to="mailto:abdurahmonbekmirzayev03@gmail.com">Email</MyLink>
          <MyLink to="tel: +998940033508">Phone</MyLink>
        </div>
        <Comment />
      </div>
      <Typography variant="paragraph">
        © 2024 Yandex Map Integration. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
