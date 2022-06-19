import React from "react";
import styles from "./App.less";

export const App: React.FC = () => {
  console.log("ere");
  return <div className={styles["app"]}></div>;
};
