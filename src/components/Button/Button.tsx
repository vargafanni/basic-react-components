import React, { ButtonHTMLAttributes } from 'react';
import EColors from '../EColors';

interface IButtonparams extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  colorShema?: EColors;
  children?: JSX.Element;
}

class Button extends React.Component<
  IButtonparams & React.HTMLProps<HTMLButtonElement>,
  {}
> {
  render(): JSX.Element {
    const {
      colorShema = EColors.GRAY,
      children,
      className = '',
      text,
      ...rest
    } = this.props;
    return (
      <button {...rest} className={`${className} ${colorShema}`}>
        {children}
      </button>
    );
  }
}

export default Button;
