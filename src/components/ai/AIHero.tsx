
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIHero = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden shadow-md"
      >
        {/* Material Design background with matte finish */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-blue-700 to-purple-700">
          {/* Subtle grid pattern for texture */}
          <div className="absolute inset-0 opacity-8" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
        </div>

        <div className="relative p-10 md:p-16 z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center px-4 py-1.5 bg-white/15 backdrop-blur-sm text-indigo-100 rounded-full border border-indigo-400/10 font-medium">
                  <Brain className="h-4 w-4 mr-2 text-blue-200" />
                  <span>最先端テクノロジー</span>
                </div>
                <div className="flex items-center px-4 py-1.5 bg-white/15 backdrop-blur-sm text-purple-100 rounded-full border border-purple-400/10 font-medium">
                  <Cpu className="h-4 w-4 mr-2 text-purple-200" />
                  <span>インテリジェントソリューション</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-blue-200 to-indigo-100 bg-clip-text text-transparent">AI</span>
                <span className="text-white">が変える、印刷の未来</span>
              </h2>
              
              <p className="text-lg md:text-xl text-indigo-50 opacity-90 mb-8 leading-relaxed">
                文唱堂印刷は、最先端のAI技術を活用し、印刷業界に革新をもたらします。データ分析から画像処理、多言語対応まで、AI技術の力でビジネスの可能性を広げます。
              </p>
              
              <Link to="https://form.typeform.com/to/Qv6t1Q">
                <Button size="lg" className="bg-white/90 text-indigo-800 hover:bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                  AI製品を見る <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements with reduced intensity for matte look */}
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      </motion.div>
    </section>
  );
};

export default AIHero;
