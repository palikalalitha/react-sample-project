import { observer } from 'mobx-react';

import React from 'react';
import * as styles from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: Props): React.ReactElement => {
  const { className = '', ...rest } = props;

  const inputClasses = `
    ${styles.inputClassName}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <input
      className={inputClasses}
      {...rest}
    />
  );
}

export default observer(Input);
