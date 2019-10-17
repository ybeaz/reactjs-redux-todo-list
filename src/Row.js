import React from "react";
import "./Row.css";

export const Row = props => {
  const { children } = props;
  return <div className="Row">{children}</div>;
};
