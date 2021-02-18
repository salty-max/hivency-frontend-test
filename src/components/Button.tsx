import React from 'react'

type ButtonProps =  {
  bgColor: string,
  textColor: string,
  text: string,
  icon: string
};

const Button: React.FC<ButtonProps> = ({bgColor, textColor, text, icon}: ButtonProps) => {
  return (
    <button className={`bg-${bgColor} hover:bg-${bgColor}-dark text-${textColor} px-4 py-1 rounded transition-colors`}>
      {icon && <i className={`mr-2 fas fa-${icon}`} />}
      <span>{text}</span>
    </button>
  )
};

export default Button;
