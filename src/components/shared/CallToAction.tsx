
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">サステナブルな印刷で、未来を変える</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          文唱堂印刷のGX技術とAI技術を活用して、あなたのビジネスも環境に配慮したものに変えてみませんか？
          環境に優しい印刷物は、企業イメージの向上にもつながります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            GX製品を見る
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            AI製品を見る
          </Button>
          <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
