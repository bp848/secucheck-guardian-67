
import React from 'react';
import { Link } from "react-router-dom";
import DropdownMenu from './DropdownMenu';
import DropdownContent from './DropdownContent';

interface OthersDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const OthersDropdown: React.FC<OthersDropdownProps> = ({ 
  isOpen, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <DropdownMenu 
      isOpen={isOpen} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative group"
    >
      <span 
        className={`text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium cursor-pointer flex items-center relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isOpen ? 'text-indigo-600 after:scale-x-100' : ''}`}
      >
        その他
      </span>
      
      <DropdownContent isOpen={isOpen} className="w-48" onMouseLeave={onMouseLeave}>
        <Link to="/ai-technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          AI技術
        </Link>
        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          ダッシュボード
        </Link>
        <Link to="https://form.typeform.com/to/Qv6t1Q" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          お問い合わせ
        </Link>
      </DropdownContent>
    </DropdownMenu>
  );
};

export default OthersDropdown;
