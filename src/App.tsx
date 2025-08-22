// import React from 'react'

import styles from "./App.module.css";
import {
  Interactive,
  // MapComponent,
  MapIntegration,
  Toggle,
  Typography,
} from "./components";
import { SearchInput, ShowStatistics } from "./components/Input";
import { Footer } from "./layout";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Typography variant="h1">Yandex Map Integration</Typography>
        <Toggle />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.left}>
          <Typography variant="paragraph">
            Explore properties on an interactive map. Search, zoom, and view
            details with modern UI and responsive design. Built with React.js
            and Yandex Maps.
          </Typography>
        </div>
        <div className={styles.right}>
          <Interactive />
        </div>
      </div>
      <div className={styles.actions}>
        <SearchInput />
        <ShowStatistics />
      </div>
      <div className={styles.mapSection}>
        <MapIntegration />
      </div>
      <Footer />
    </div>
  );
};

export default App;
