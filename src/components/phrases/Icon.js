import React from "react";
import T from "prop-types";

import { IconConfig } from "./IconConfig";

export const Icon = ({ name, ...props }) => {
  const IconComponent = IconConfig[name];
  return <IconComponent {...props} />;
};

Icon.propTypes = {
  name: T.string.isRequired,
  size: T.string.isRequired,
  color: T.string.isRequired
};
Icon.defaultProps = {
  size: "18px",
  color: "violet"
};
