import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { Loader } from '../loader';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactElement;
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, className, ...rest }: Props): ReactElement => {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};

