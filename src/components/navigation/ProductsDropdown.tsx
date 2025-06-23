
import React from 'react';
import { List } from 'lucide-react';
import { Link } from "react-router-dom";
import DropdownMenu from './DropdownMenu';
import DropdownContent from './DropdownContent';

interface ProductsDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ 
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
        <List className="h-4 w-4 mr-1" />
        製品・サービス
      </span>
      
      <DropdownContent isOpen={isOpen} className="w-80" onMouseLeave={onMouseLeave}>
        <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          すべて
        </Link>
        <Link to="/products?category=printing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          印刷・出版サービス
        </Link>
        <Link to="/products?category=logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          物流・配送サービス
        </Link>
        <Link to="/products?category=energy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          エネルギー管理
        </Link>
        <Link to="/products?category=design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          デザイン・マーケティング
        </Link>
        <Link to="/products?category=education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          教育・研修
        </Link>
        <Link to="/products?category=audit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200">
          監査・分析
        </Link>
        <Link to="/gx-ai-products" className="block px-4 py-2 mt-2 text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200">
          GX×AI製品特集
        </Link>
      </DropdownContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
