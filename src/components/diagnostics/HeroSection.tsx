
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChartBar, Lightbulb } from 'lucide-react';

const HeroSection: React.FC = () => (
  <motion.div 
    className="text-center mb-12 px-3 sm:px-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full text-green-800 font-medium mb-6 shadow-md border border-green-200">
        <Check className="h-4 w-4 text-green-600" />
        <span className="font-semibold">持続可能な未来へのビジネス変革</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        <span className="bg-gradient-to-r from-green-800 via-teal-700 to-emerald-800 bg-clip-text text-transparent drop-shadow-sm">
          サステナブルDX診断サービス
        </span>
      </h1>
      
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
        持続可能な成長と競争力強化を実現するための診断サービスを提供しています。
        サステナビリティとDXの両面から企業の現状を評価し、明確なアクションプランをご提案します。
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto text-left"
    >
      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <ChartBar className="h-10 w-10 text-green-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2 text-gray-800">データ駆動型評価</h3>
        <p className="text-gray-700">客観的な指標に基づいた現状分析と業界ベンチマークで、貴社の立ち位置を明確に把握できます。</p>
      </div>
      
      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Lightbulb className="h-10 w-10 text-amber-500 mb-4" />
        <h3 className="text-lg font-semibold mb-2 text-gray-800">実践的提案</h3>
        <p className="text-gray-700">診断結果に基づいた具体的なアクションプランと段階的な改善ステップをご提供します。</p>
      </div>
    </motion.div>
  </motion.div>
);

export default HeroSection;
