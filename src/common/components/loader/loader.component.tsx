import React from 'react';

import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
}

export const Loader = ({ className, color, ...rest }: Props) => {
  return (
    <div style={{ borderColor: color, borderLeftColor: 'transparent' }} className={`${styles.loader}`} {...rest}></div>
  );
};
