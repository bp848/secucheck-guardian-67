
import React, { useRef } from 'react';

interface DropdownMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  isOpen, 
  onMouseEnter, 
  onMouseLeave, 
  children, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div 
      className={`relative ${className}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
