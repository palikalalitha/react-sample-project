import { observer } from 'mobx-react';
import React from 'react';
import * as styles from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
}

const Button = (props: Props): React.ReactElement => {
  const {
    children,
    onClick,
    variant = "primary",
    size = "medium",
    disabled = false,
    type = "button",
    className = "",
    icon = null,
    ...rest
  } = props;

  const buttonClasses = `
    ${styles.baseClassName}
    ${styles.variants[variant as keyof typeof styles.variants]}
    ${styles.sizes[size as keyof typeof styles.sizes]}
    ${disabled ? styles.disabledClassName : styles.enabledClassName}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default observer(Button);
