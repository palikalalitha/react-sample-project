import { observer } from 'mobx-react';
import React from 'react';
import * as styles from './styles';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: Props): React.ReactElement => {
  const { children, className = '', ...rest } = props;

  const cardClasses = `
    ${styles.cardClassName}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export default observer(Card);
