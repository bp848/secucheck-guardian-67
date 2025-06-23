
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, BarChart4, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupportSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="max-w-5xl mx-auto"
  >
    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl shadow-lg text-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">診断から改善までトータルサポート</h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          診断結果に基づいた具体的な改善プランの提案から実行支援まで、
          一貫したサポートで貴社のサステナブルDX推進をお手伝いします。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-3">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">診断レポート</h3>
          <p className="text-white/80 text-sm">
            現状の課題と機会を明確に可視化したレポートを提供します
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-3">
            <BarChart4 className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">改善プラン</h3>
          <p className="text-white/80 text-sm">
            優先度付きの具体的なアクションプランを策定します
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-3">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">実行支援</h3>
          <p className="text-white/80 text-sm">
            改善プランの実行をサポートし、継続的な発展をお手伝いします
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button 
          size="lg" 
          className="bg-white text-green-700 hover:bg-gray-100 gap-2"
          onClick={() => window.open('https://form.typeform.com/to/Qv6t1Q', '_blank')}
        >
          詳細を問い合わせる
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </motion.div>
);

export default SupportSection;
