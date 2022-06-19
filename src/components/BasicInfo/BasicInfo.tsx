import React from "react";
import styles from "./BasicInfo.less";

export const BasicInfo: React.FC = () => {
  return (
    <div className={styles["infoBox"]}>
      <h1>jeff demanche</h1>
      <p>software engineer, music, art</p>
    </div>
  );
};
