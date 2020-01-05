import React from "react";
import css from "./Year.module.css";

function Year({ year }) {
  return (
    <div className={css.body}>
      <p className={css.date}>{year}</p>
    </div>
  );
}

export default Year;
