
import React, { ReactNode } from 'react';

interface DisabledProps {
  children: ReactNode;
  disabled: boolean;
}

const Disabled: React.FC<DisabledProps> = ({ children, disabled }) => (
  <div style={{ opacity: disabled ? 0.5 : 1 }} onClick={() => {
    console.log('onClick disabled');
  }} onTouchStart={(e) => {
    console.log('onTouchStart disabled');
    e.preventDefault();
    e.stopPropagation();
  }} onTouchMove={(e) => {
    console.log('onTouchMove disabled');
    e.preventDefault();
    e.stopPropagation();
  }} onMouseEnter={() => {
    console.log('onMouseEnter disabled');
  }}
  >
    {children}
  </div>
);

export default Disabled;
