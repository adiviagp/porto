import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return (
    <div className={twMerge('mx-auto max-w-7xl px-12', className)}>
      {children}
    </div>
  );
};

export default Container;
