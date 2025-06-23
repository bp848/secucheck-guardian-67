
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, BarChart3 } from 'lucide-react';

const GxAssessmentHeader: React.FC = () => (
  <motion.section 
    className="mb-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative bg-gradient-to-r from-emerald-700 to-green-700 rounded-xl p-8 text-white shadow-xl overflow-hidden">
      {/* Add a subtle texture pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>
      
      <div className="relative max-w-3xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center text-shadow-sm">
            <Leaf className="mr-3 h-8 w-8 text-green-100" />
            GX対応度診断ツール
          </h1>
          <p className="text-lg opacity-100 mb-4 leading-relaxed text-green-50 text-shadow-sm">
            貴社のグリーントランスフォーメーション（GX）への取り組み状況を診断し、改善点を明確化します。
            各項目に対する取り組み状況をチェックすることで、現在のGX対応レベルと今後の優先課題を特定します。
          </p>
          <div className="flex items-center gap-2 text-white mt-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            <BarChart3 className="h-5 w-5 text-green-100" />
            <span className="text-sm font-medium">5分程度で簡易診断が完了します</span>
          </div>
        </motion.div>
      </div>
      
      {/* Add decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-green-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
    </div>
  </motion.section>
);

export default GxAssessmentHeader;
