import React from "react";
import styles from "./App.less";
import { BasicInfo } from "./BasicInfo/BasicInfo";
import { GenerativeBackground } from "./GenerativeBackground/GenerativeBackground";

export const App: React.FC = () => {
  return (
    <div className={styles["app"]}>
      <GenerativeBackground />
      <BasicInfo />
    </div>
  );
};
