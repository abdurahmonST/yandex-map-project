// import React from "react";

import Typography from "../../Typography";
import styles from "./ShowStatistics.module.css";

const ShowStatistics = () => {
  return (
    <div>
      <Typography fontsize="24px">Geocode of Location</Typography>
      <input type="text" className={styles.InputStyle} />
    </div>
  );
};

export default ShowStatistics;
