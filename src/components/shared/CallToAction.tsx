
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Leaf, Cpu, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 sm:p-10 shadow-xl"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 10 L40 10 M10 0 L10 40" stroke="white" strokeWidth="0.5" fill="none" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold mb-4 text-white text-shadow-sm"
          >
            <span className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-md">
              サステナブルな印刷で、未来を変える
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-blue-50 text-base sm:text-lg text-shadow-sm"
          >
            文唱堂印刷のGX技術とAI技術を活用して、あなたのビジネスも環境に配慮したものに変えてみませんか？
            環境に優しい印刷物は、企業イメージの向上にもつながります。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/gx-products">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 border border-green-500/20 shadow-lg hover:shadow-xl transition-all h-12 group font-medium">
                <Leaf className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                GX製品を見る
              </Button>
            </Link>
            <Link to="/ai-products">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border border-blue-500/20 shadow-lg hover:shadow-xl transition-all h-12 group font-medium">
                <Cpu className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                AI製品を見る
              </Button>
            </Link>
            <Link to="https://form.typeform.com/to/Qv6t1Q">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 hover:text-white shadow-lg hover:shadow-xl transition-all h-12 group font-medium">
                <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                お問い合わせ
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-0 -left-10 w-40 h-40 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
