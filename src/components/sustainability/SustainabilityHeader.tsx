
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, BarChart3, Check } from 'lucide-react';

const SustainabilityHeader: React.FC = () => (
  <motion.section 
    className="mb-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative overflow-hidden rounded-xl shadow-xl">
      {/* Background gradient with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800">
        <div className="absolute inset-0 opacity-15" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }}></div>
      </div>

      <div className="relative p-8 text-white z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Leaf className="h-5 w-5 text-green-100" />
              <span className="font-medium">サステナビリティ診断</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-start text-shadow-sm">
              <span className="bg-gradient-to-r from-green-50 to-emerald-100 bg-clip-text text-transparent drop-shadow-md">
                サステナビリティ自己診断ツール
              </span>
            </h1>
            
            <p className="text-lg opacity-100 mb-8 leading-relaxed text-green-50 text-shadow-sm">
              貴社のSDGs取り組み状況やサステナビリティへの対応レベルを診断し、サステナビリティレポート作成の準備をサポートします。
              簡単な質問に答えるだけで、現状の評価と改善ポイントをAIが分析します。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <BarChart3 className="h-5 w-5 mr-2 text-green-100" />
                <span>客観的な指標</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Check className="h-5 w-5 mr-2 text-green-100" />
                <span>すぐに実践できる提案</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </div>
  </motion.section>
);

export default SustainabilityHeader;
