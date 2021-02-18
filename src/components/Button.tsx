import React from 'react'

type ButtonProps =  {
  bgColor?: string,
  textColor?: string,
  text?: string,
  icon?: string
};

const defaultProps: ButtonProps = {
  bgColor: 'gray-darkest',
  textColor: 'white',
  text: undefined,
  icon: undefined
}

const Button: React.FC<ButtonProps> = ({bgColor, textColor, text, icon}: ButtonProps) => {
  return (
    <button className={`bg-${bgColor} hover:bg-${bgColor}-dark text-${textColor} px-4 py-1 rounded transition-colors`}>
      {icon && <i className={`${text ? 'mr-2 ' : ''}fas fa-${icon}`} />}
      {text && <span>{text}</span>}
    </button>
  )
};

Button.defaultProps = defaultProps;

export default Button;
