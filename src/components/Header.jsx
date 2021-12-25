import React from "react";
import Button from "../atoms/Button";

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
