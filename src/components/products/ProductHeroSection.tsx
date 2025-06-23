
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCategories } from './ProductPageLayout';

interface ProductHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  categories?: ProductCategories;
}

const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaLink,
  categories
}) => {
  // Check if the image is a placeholder or missing
  const isPlaceholderImage = imageUrl === '/placeholder.svg' || !imageUrl;

  return (
    <section id="product-hero" className="py-16 relative overflow-hidden">
      {/* Material Design background with matte finish */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-indigo-700 to-blue-800 -z-10">
        {/* Add a subtle texture pattern */}
        <div className="absolute inset-0 opacity-15" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        {isPlaceholderImage ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-indigo-100 font-medium mb-6 shadow-sm border border-white/30">
              <Sparkles className="h-4 w-4 text-indigo-200" />
              <span>{subtitle}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-md">
              <span className="bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100 bg-clip-text text-transparent drop-shadow-md">
                {title}
              </span>
            </h1>
            
            <p className="text-gray-100 mb-8 text-lg leading-relaxed text-shadow-sm">{description}</p>
            
            {categories && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.function && (
                  <span className="flex items-center gap-1 bg-blue-500/30 border border-blue-400/30 text-blue-50 text-xs font-medium px-3 py-1.5 rounded-full">
                    <Tag className="h-3 w-3" />
                    {categories.function}
                  </span>
                )}
                {categories.technology && (
                  <span className="flex items-center gap-1 bg-purple-500/30 border border-purple-400/30 text-purple-50 text-xs font-medium px-3 py-1.5 rounded-full">
                    <Tag className="h-3 w-3" />
                    {categories.technology}
                  </span>
                )}
                {categories.challenge && (
                  <span className="flex items-center gap-1 bg-green-500/30 border border-green-400/30 text-green-50 text-xs font-medium px-3 py-1.5 rounded-full">
                    <Tag className="h-3 w-3" />
                    {categories.challenge}
                  </span>
                )}
              </div>
            )}
            
            <Link to={ctaLink}>
              <Button className="bg-white hover:bg-gray-100 text-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300 group font-medium">
                <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {ctaText}
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-indigo-100 font-medium mb-6 shadow-sm border border-white/30">
                <Sparkles className="h-4 w-4 text-indigo-200" />
                <span>{subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-md">
                <span className="bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100 bg-clip-text text-transparent drop-shadow-md">
                  {title}
                </span>
              </h1>
              
              <p className="text-gray-100 mb-8 text-lg leading-relaxed text-shadow-sm">{description}</p>
              
              {categories && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {categories.function && (
                    <span className="flex items-center gap-1 bg-blue-500/30 border border-blue-400/30 text-blue-50 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <Tag className="h-3 w-3" />
                      {categories.function}
                    </span>
                  )}
                  {categories.technology && (
                    <span className="flex items-center gap-1 bg-purple-500/30 border border-purple-400/30 text-purple-50 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <Tag className="h-3 w-3" />
                      {categories.technology}
                    </span>
                  )}
                  {categories.challenge && (
                    <span className="flex items-center gap-1 bg-green-500/30 border border-green-400/30 text-green-50 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <Tag className="h-3 w-3" />
                      {categories.challenge}
                    </span>
                  )}
                </div>
              )}
              
              <Link to={ctaLink}>
                <Button className="bg-white hover:bg-gray-100 text-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300 group font-medium">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/15 p-3 backdrop-blur-sm border border-white/20">
                {/* Inner shadow/glow effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-inner"></div>
                </div>
                
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-auto object-cover rounded-xl shadow-md"
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-blue-500/30 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-indigo-500/30 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
    </section>
  );
};

export default ProductHeroSection;
