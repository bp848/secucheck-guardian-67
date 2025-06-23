
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import InitialUserForm from './InitialUserForm';

const DiagnosticHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-green-800 via-teal-700 to-emerald-800 p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Material Design background with matte finish */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Crect x='0' y='0' width='10' height='10'/%3E%3Crect x='10' y='10' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
        
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            あなたの企業の<span className="text-green-200">サステナビリティ</span>を徹底診断！
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            サステナビリティ診断、サステナブルDX診断、GX評価、スコープ1～3評価を無料で実施。
            今すぐ登録して、改善ポイントと戦略をチェック！
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ul className="text-left space-y-2 mb-6 md:mb-0 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              {[
                '環境・社会への取り組みを総合評価',
                'デジタル技術を活用した持続可能性向上',
                '脱炭素経営への取り組み状況を数値化',
                '具体的な削減アクションを提案'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <InitialUserForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-200 text-center"
          >
            <p>※ご入力いただいた情報は診断サービス向上のために利用します</p>
            <p>※個人情報は厳重に管理し、診断サービス以外の目的では使用いたしません</p>
          </motion.div>
          
          {/* Decorative elements with reduced intensity for matte look */}
          <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-green-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="absolute -top-20 -left-20 w-56 h-56 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticHero;
