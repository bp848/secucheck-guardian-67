
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Save } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { defaultScopeOneData, ScopeOneDataType } from '@/data/scopeOneData';
import ScopeHeader from '@/components/scope/ScopeHeader';
import ScopeNavbar from '@/components/scope/ScopeNavbar';
import StepNavigation from '@/components/scope/StepNavigation';
import { useLocation } from 'react-router-dom';
import ScopeOneStepContent from '@/components/scope/ScopeOneStepContent';
import { Button } from '@/components/ui/button';

// Extended type to include saved result properties
interface SavedScopeOneData extends ScopeOneDataType {
  savedAt: string; // Timestamp when result was saved
  label: string;   // Display label for saved result
}

const ScopeOneContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { toast } = useToast();
  const [scopeOneData, setScopeOneData] = useState<ScopeOneDataType>(defaultScopeOneData);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const [savedResults, setSavedResults] = useState<SavedScopeOneData[]>([]);
  const [showSavedResults, setShowSavedResults] = useState(false);
  
  // Load saved results from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('scopeOneSavedResults');
    if (savedData) {
      try {
        setSavedResults(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to parse saved results', e);
      }
    }
  }, []);
  
  const [formData, setFormData] = useState({
    companyVehicles: defaultScopeOneData.categories[0].value,
    stationaryEquipment: defaultScopeOneData.categories[1].value,
    hvacEquipment: defaultScopeOneData.categories[2].value,
    other: defaultScopeOneData.categories[3].value,
    targetYear: '2023年度'
  });
  
  // Steps for the Scope 1 emissions data page - updated for clearer navigation
  const steps = [
    { id: "input", title: "データ入力", description: "自社データの入力" },
    { id: "overview", title: "データ概要", description: "排出量の全体像を把握" },
    { id: "details", title: "詳細分析", description: "カテゴリ別・期間別の詳細" },
    { id: "reduction", title: "削減計画", description: "目標と削減施策の策定" }
  ];
  
  const downloadReport = () => {
    toast({
      title: "レポートのダウンロード",
      description: "Scope 1排出量の詳細レポートがダウンロードされました。",
      duration: 3000,
    });
  };

  const saveResult = () => {
    // Add current date and label to the saved result
    const resultToSave: SavedScopeOneData = {
      ...scopeOneData,
      savedAt: new Date().toISOString(),
      label: `保存 - ${new Date().toLocaleDateString('ja-JP')}`
    };
    
    const updatedResults = [...savedResults, resultToSave];
    setSavedResults(updatedResults);
    
    // Save to localStorage
    localStorage.setItem('scopeOneSavedResults', JSON.stringify(updatedResults));
    
    toast({
      title: "結果を保存しました",
      description: "Scope 1排出量の分析結果が保存されました。",
      duration: 3000,
    });
  };

  const loadSavedResult = (index: number) => {
    // Ensure we only set ScopeOneDataType fields to scopeOneData
    const { savedAt, label, ...scopeOneDataFields } = savedResults[index];
    setScopeOneData(scopeOneDataFields);
    setShowSavedResults(false);
    
    toast({
      title: "保存した結果を読み込みました",
      description: "過去に保存したScope 1分析結果が読み込まれました。",
      duration: 3000,
    });
  };

  const deleteSavedResult = (index: number) => {
    const updatedResults = [...savedResults];
    updatedResults.splice(index, 1);
    setSavedResults(updatedResults);
    
    // Update localStorage
    localStorage.setItem('scopeOneSavedResults', JSON.stringify(updatedResults));
    
    toast({
      title: "保存結果を削除しました",
      description: "選択した保存結果が削除されました。",
      duration: 3000,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate new total
    const total = formData.companyVehicles + 
                 formData.stationaryEquipment + 
                 formData.hvacEquipment + 
                 formData.other;

    // Calculate new percentages
    const categories = [
      {
        name: '社有車',
        value: formData.companyVehicles,
        percentage: parseFloat(((formData.companyVehicles / total) * 100).toFixed(1)),
        color: 'bg-purple-500'
      },
      {
        name: '定置燃焼機器',
        value: formData.stationaryEquipment,
        percentage: parseFloat(((formData.stationaryEquipment / total) * 100).toFixed(1)),
        color: 'bg-indigo-500'
      },
      {
        name: '空調設備',
        value: formData.hvacEquipment,
        percentage: parseFloat(((formData.hvacEquipment / total) * 100).toFixed(1)),
        color: 'bg-sky-500'
      },
      {
        name: 'その他',
        value: formData.other,
        percentage: parseFloat(((formData.other / total) * 100).toFixed(1)),
        color: 'bg-teal-500'
      }
    ];

    // 月次データも更新（データ入力に応じて調整）
    const scaleFactor = total / scopeOneData.total;
    const updatedMonthlyTrend = scopeOneData.monthlyTrend.map(item => ({
      ...item,
      value: parseFloat((item.value * scaleFactor).toFixed(1))
    }));

    // Update the data
    setScopeOneData(prev => ({
      ...prev,
      total,
      categories,
      monthlyTrend: updatedMonthlyTrend,
      yearOverYear: prev.yearOverYear.map(item => 
        item.year === '2022年度' ? { ...item, value: total } : item
      ),
      reductionTargets: prev.reductionTargets.map(target => 
        target.year === formData.targetYear 
          ? { ...target, target: Math.round(total * 0.9) }
          : target
      )
    }));

    toast({
      title: "データが更新されました",
      description: "入力したデータでScope 1排出量が計算されました。次のステップに進んで結果を確認してください。",
      duration: 5000,
    });

    // After submitting form, move to overview tab automatically
    setShowForm(false);
    setActiveStep(1); // Set to the second step (overview) after data entry
  };

  const handleInputChange = (field: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      targetYear: value
    }));
  };
  
  // ステップを進める
  const goToNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // ステップを戻る
  const goToPreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* ページヘッダー */}
        <div className="mb-8">
          <ScopeHeader 
            title="Scope 1排出量データ"
            description="企業が直接排出する温室効果ガス（自社所有の設備や車両からの排出）のデータ分析と可視化。削減目標に対する進捗状況を確認し、効果的な排出削減策を策定するためのインサイトを提供します。"
            icon={<LineChart className="mr-3 h-8 w-8" />}
          />
        </div>
        
        {/* スコープナビゲーション */}
        <ScopeNavbar 
          currentPath={location.pathname}
          onShowForm={() => {
            setShowForm(true);
            setActiveStep(0); // Set to input step when clicking form button
          }}
        />

        {/* 保存と読み込みボタン */}
        <div className="flex justify-end mb-4 gap-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-1 text-blue-600 border-blue-200 hover:bg-blue-50"
            onClick={() => setShowSavedResults(!showSavedResults)}
          >
            <Save className="h-4 w-4" /> {showSavedResults ? '保存結果を隠す' : '保存結果を表示'}
          </Button>
          {(activeStep > 0) && (
            <Button 
              variant="outline" 
              className="flex items-center gap-1 text-green-600 border-green-200 hover:bg-green-50"
              onClick={saveResult}
            >
              <Save className="h-4 w-4" /> 現在の結果を保存
            </Button>
          )}
        </div>

        {/* 保存された結果一覧 */}
        {showSavedResults && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className="font-medium text-lg mb-3">保存された結果</h3>
            {savedResults.length === 0 ? (
              <p className="text-gray-500">保存された結果はありません</p>
            ) : (
              <div className="space-y-2">
                {savedResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">{result.label || `結果 ${index + 1}`}</span>
                      <span className="text-sm text-gray-500 ml-2">
                        合計: {result.total} {result.unit}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => loadSavedResult(index)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        読み込み
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => deleteSavedResult(index)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50"
                      >
                        削除
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* ステップナビゲーションとコンテンツ */}
        <StepNavigation
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          goToPreviousStep={goToPreviousStep}
          goToNextStep={goToNextStep}
        />
        
        {/* ステップコンテンツ */}
        <motion.div 
          key={steps[activeStep].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <ScopeOneStepContent
            activeStepId={steps[activeStep].id}
            formData={formData}
            onFormSubmit={handleFormSubmit}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectChange}
            onCancel={() => setActiveStep(1)}
            scopeOneData={scopeOneData}
            onDownloadReport={downloadReport}
          />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScopeOneContainer;
