import React from 'react';

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  text?: string;
  icon?: string;
  circle?: boolean;
  onClick?: () => void;
  isSubmit?: boolean;
};

const defaultProps: ButtonProps = {
  bgColor: 'gray-darkest',
  textColor: 'white',
  text: undefined,
  icon: undefined,
  circle: false,
  onClick: () => {
    console.log('click');
  },
  isSubmit: false,
};

const Button: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  text,
  icon,
  circle,
  onClick,
  isSubmit,
}: ButtonProps) => {
  return (
    <>
      {isSubmit ? (
        <input
          type="submit"
          value={text}
          className={`bg-${bgColor} hover:bg-${bgColor}-dark text-${textColor} ${
            circle ? 'w-10 h-10' : 'py-2 px-4'
          } rounded${circle ? '-full' : ''} transition-colors duration-300 cursor-pointer`}
        />
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={`bg-${bgColor} hover:bg-${bgColor}-dark text-${textColor} ${
            circle ? 'w-10 h-10' : 'py-2 px-4'
          } rounded${circle ? '-full' : ''} transition-colors duration-300`}
        >
          {icon && <i className={`${text ? 'mr-2 ' : ''}fas fa-${icon}`} />}
          {text && <span>{text}</span>}
        </button>
      )}
    </>
  );
};

Button.defaultProps = defaultProps;

export default Button;
