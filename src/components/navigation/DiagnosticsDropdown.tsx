
import React from 'react';
import { FolderCheck } from 'lucide-react';
import { Link } from "react-router-dom";
import DropdownMenu from './DropdownMenu';
import DropdownContent from './DropdownContent';

interface DiagnosticsDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const DiagnosticsDropdown: React.FC<DiagnosticsDropdownProps> = ({ 
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
        <FolderCheck className="h-4 w-4 mr-1" />
        診断サービス
      </span>
      
      <DropdownContent isOpen={isOpen} className="w-64" onMouseLeave={onMouseLeave}>
        <Link to="/diagnostic-landing" className="block px-4 py-2 text-sm text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors duration-200 font-medium bg-green-50">
          統合診断サービス【新】
        </Link>
        <Link to="/about-gx" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          サステナビリティについて
        </Link>
        <Link to="/sustainability-check" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          サステナビリティ自己診断ツール
        </Link>
        <Link to="/comprehensive-diagnostics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          サステナブルDX診断サービス
        </Link>
        <Link to="/gx-assessment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 font-medium">
          GX対応度診断ツール
        </Link>
        <Link to="/scope-one" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          Scope 1 排出量
        </Link>
        <Link to="/scope-two" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          Scope 2 排出量
        </Link>
      </DropdownContent>
    </DropdownMenu>
  );
};

export default DiagnosticsDropdown;
