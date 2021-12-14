import React from "react";
import PropTypes from "prop-types";
import { EMPTY_STRING } from "../utilities/constans";

export default function Button(props) {
  const { text, type } = props;
  return <button className={`button button--${type}`}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.node,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

Button.defaultProps = {
  text: EMPTY_STRING,
  type: "primary",
};
