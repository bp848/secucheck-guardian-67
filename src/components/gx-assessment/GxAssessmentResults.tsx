
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import ResultsHeader from '@/components/shared/ResultsHeader';
import OverallScoreCard from '@/components/shared/OverallScoreCard';
import CategoryScores from '@/components/shared/CategoryScores';
import RecommendationsCard from '@/components/shared/RecommendationsCard';
import GxResultDetailChart from './GxResultDetailChart';
import GxQuestionResultsTable from './GxQuestionResultsTable';
import { usePrintHandler, saveResultsToLocalStorage } from '@/components/shared/ResultsUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, PieChart } from 'lucide-react';

interface GxAssessmentResultsProps {
  results: {
    overallScore: number;
    categoryScores: Record<string, number>;
    company: {
      name: string;
      industry: string;
      employees: string;
      revenue: string;
      contact: string;
    };
    recommendations: string[];
  };
  answers: Record<string, boolean>;
  onDetailedDiagnostics?: () => void;
  onConsultantContact?: () => void;
}

const GxAssessmentResults: React.FC<GxAssessmentResultsProps> = ({ 
  results,
  answers,
  onDetailedDiagnostics = () => {},
  onConsultantContact = () => {}
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { handlePrint, handleDownload } = usePrintHandler(
    `${results.company.name}_GX対応度診断結果`, 
    printRef
  );
  
  // 結果をローカルストレージに保存
  const handleSaveResults = () => {
    const resultsToSave = {
      timestamp: new Date().toISOString(),
      ...results,
      answers
    };
    
    saveResultsToLocalStorage('gxAssessmentResults', resultsToSave, toast);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <ResultsHeader 
        title="GX対応度診断結果"
        onSave={handleSaveResults}
        onPrint={handlePrint}
        onDownload={handleDownload}
      />
      
      <div ref={printRef} className="space-y-6 p-2">
        <OverallScoreCard 
          score={results.overallScore} 
          company={results.company} 
        />
        
        <Tabs defaultValue="graphs" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="graphs" className="flex items-center gap-1">
              <PieChart className="h-4 w-4" />
              グラフ表示
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              表形式
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="graphs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CategoryScores categoryScores={results.categoryScores} />
              <GxResultDetailChart categoryScores={results.categoryScores} />
            </div>
          </TabsContent>
          
          <TabsContent value="table">
            <GxQuestionResultsTable 
              categoryScores={results.categoryScores}
              answers={answers}
            />
          </TabsContent>
        </Tabs>
        
        <RecommendationsCard 
          recommendations={results.recommendations}
          title="推奨アクション"
          description="あなたの組織のGX対応度を向上させるための推奨事項"
          onDetailedDiagnostics={onDetailedDiagnostics}
          onConsultantContact={onConsultantContact}
        />
      </div>
    </motion.div>
  );
};

export default GxAssessmentResults;
