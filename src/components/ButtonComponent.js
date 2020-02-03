import React from "react";

export const Button = ({ id, className, info }) => (
  <button id={id} className={className}>
    {info}
  </button>
);
