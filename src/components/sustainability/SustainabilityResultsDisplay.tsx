
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import ResultsHeader from '@/components/shared/ResultsHeader';
import OverallScoreCard from '@/components/shared/OverallScoreCard';
import CategoryScores from '@/components/shared/CategoryScores';
import RecommendationsCard from '@/components/shared/RecommendationsCard';
import SustainabilityQuestionResultsTable from './SustainabilityQuestionResultsTable';
import { usePrintHandler, saveResultsToLocalStorage } from '@/components/shared/ResultsUtils';
import { Button } from "@/components/ui/button";
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getProgressColor } from '@/components/shared/ResultsUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart as BarChartIcon, ListFilter } from 'lucide-react';

interface SustainabilityResultsDisplayProps {
  companyName: string;
  industry: string;
  selectedSdgs: number[];
  results: {
    overallScore: number;
    categoryScores: Record<string, number>;
    recommendations: string[];
  };
  answers: Record<string, boolean>;
  onDetailedDiagnostics: () => void;
  onConsultantContact: () => void;
}

const SustainabilityResultsDisplay: React.FC<SustainabilityResultsDisplayProps> = ({
  companyName,
  industry,
  selectedSdgs,
  results,
  answers,
  onDetailedDiagnostics,
  onConsultantContact
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { handlePrint, handleDownload } = usePrintHandler(
    `${companyName}サステナビリティ診断結果`, 
    printRef
  );
  
  const categoryChartData = Object.entries(results.categoryScores).map(([name, value]) => ({
    name,
    value
  }));
  
  // 結果をローカルストレージに保存
  const handleSaveResults = () => {
    const resultsToSave = {
      timestamp: new Date().toISOString(),
      companyName,
      industry,
      selectedSdgs,
      results,
      answers
    };
    
    saveResultsToLocalStorage('sustainabilityResults', resultsToSave, toast);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <ResultsHeader 
        title="サステナビリティ診断結果"
        onSave={handleSaveResults}
        onPrint={handlePrint}
        onDownload={handleDownload}
      />
      
      <div ref={printRef} className="space-y-6 p-2">
        <OverallScoreCard 
          score={results.overallScore} 
          company={{ name: companyName, industry }}
        />
        
        <Tabs defaultValue="graphs" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="graphs" className="flex items-center gap-1">
              <BarChartIcon className="h-4 w-4" />
              グラフ表示
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-1">
              <ListFilter className="h-4 w-4" />
              表形式
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="graphs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <CategoryScores categoryScores={results.categoryScores} />
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-lg font-medium mb-3">カテゴリ別スコア</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categoryChartData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="name" width={90} />
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'スコア']}
                        labelFormatter={(name) => `${name}カテゴリ`}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {categoryChartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.value >= 80 ? '#10b981' : 
                                  entry.value >= 60 ? '#3b82f6' : 
                                  entry.value >= 40 ? '#f59e0b' : 
                                  '#ef4444'} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="table">
            <SustainabilityQuestionResultsTable 
              categoryScores={results.categoryScores}
              answers={answers}
            />
          </TabsContent>
        </Tabs>
        
        <RecommendationsCard 
          recommendations={results.recommendations}
          title="推奨アクション"
          description="あなたの組織のサステナビリティ対応度を向上させるための推奨事項"
          onDetailedDiagnostics={onDetailedDiagnostics}
          onConsultantContact={onConsultantContact}
        />
      </div>
    </motion.div>
  );
};

export default SustainabilityResultsDisplay;
