import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import * as styles from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = (props: Props): React.ReactElement | null => {
  const { isOpen, onClose, children, className = '', ...rest } = props;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

    const modalClasses = `
    ${styles.modalOverlayClassName}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={modalClasses} onClick={onClose} {...rest}>
      <div className={styles.modalContentClassName} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButtonClassName}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default observer(Modal);
