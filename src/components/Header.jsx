import React from "react";
import Button from "../atoms/Button";

import PropTypes from "prop-types";

export default function Header() {
  return (
    <header className="header">
      <svg className="header__logo" />
      <div className="header__buttons">
        <Button text="Contact me" />
      </div>
    </header>
  );
}
