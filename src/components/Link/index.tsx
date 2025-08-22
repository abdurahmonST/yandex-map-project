import React from "react";
import { NavLink } from "react-router";

import styles from "./Link.module.css";
import Typography from "../Typography";

interface LinkProps {
  children?: React.ReactNode;
  to?: string;
}

const MyLink: React.FC<LinkProps> = ({ children, to = "/" }) => {
  return (
    <div className={styles.container}>
      <NavLink
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h2">{children}</Typography>
      </NavLink>
      <img src="/icons/arrowToTop.svg" alt="Arrow Right" />
    </div>
  );
};

export default MyLink;
