
import React from 'react';

interface DropdownContentProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({ 
  isOpen, 
  children, 
  className = '', 
  onMouseLeave 
}) => {
  return (
    <div 
      className={`absolute left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-100 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} ${className}`}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-1">
        {children}
      </div>
    </div>
  );
};

export default DropdownContent;
