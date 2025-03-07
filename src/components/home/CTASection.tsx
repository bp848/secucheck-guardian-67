
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">今すぐ始めましょう</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          文唱堂印刷のGX x AIプロダクトで、ビジネスと環境の両立を実現。無料相談で、最適なソリューションをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            お問い合わせ
          </Button>
          <Link to="/sustainability-check">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all 
                duration-200 flex items-center gap-2"
            >
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-1 text-yellow-300" /> 
                <Leaf className="h-5 w-5 mr-1" /> 
                <span>サステナビリティ診断を試す</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
