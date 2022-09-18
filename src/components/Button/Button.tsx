import React, { ButtonHTMLAttributes } from "react";
import EColors from "../EColors";
import "./button.scss";

interface IButtonparams extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorShema?: EColors;
  children?: JSX.Element | string;
}

class Button extends React.Component<IButtonparams & React.HTMLProps<HTMLButtonElement>, {}> {
  render(): JSX.Element {
    const { colorShema = EColors.GRAY, children, className = "", ...rest } = this.props;
    return (
      <button {...rest} className={`${className} ${colorShema}`}>
        {children}
      </button>
    );
  }
}

export default Button;
