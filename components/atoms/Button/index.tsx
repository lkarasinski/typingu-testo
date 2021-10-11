import React from "react";

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
