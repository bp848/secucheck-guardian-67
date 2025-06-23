
import React from 'react';
import { motion } from 'framer-motion';
import { ScopeTwoDataType } from '@/data/scopeTwoData';
import TotalEmissionsCard from './overview/TotalEmissionsCard';
import CategoryEmissionsCard from './overview/CategoryEmissionsCard';
import LocationEmissionsCard from './overview/LocationEmissionsCard';
import MonthlyTrendCard from './overview/MonthlyTrendCard';

interface ScopeTwoOverviewTabProps {
  scopeTwoData: ScopeTwoDataType;
  onDownloadReport: () => void;
  onViewDetails: () => void;
}

const ScopeTwoOverviewTab: React.FC<ScopeTwoOverviewTabProps> = ({ 
  scopeTwoData, 
  onDownloadReport,
  onViewDetails
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* 総排出量カード */}
      <TotalEmissionsCard 
        total={scopeTwoData.total}
        unit={scopeTwoData.unit}
        previousYearValue={scopeTwoData.yearOverYear[1].value}
        onDownloadReport={onDownloadReport}
      />
      
      {/* カテゴリ別排出量 */}
      <CategoryEmissionsCard 
        categories={scopeTwoData.categories}
        unit={scopeTwoData.unit}
      />
      
      {/* 拠点別排出量 */}
      <LocationEmissionsCard 
        locations={scopeTwoData.locations}
        unit={scopeTwoData.unit}
      />
      
      {/* 月次推移 */}
      <MonthlyTrendCard 
        monthlyTrend={scopeTwoData.monthlyTrend}
        unit={scopeTwoData.unit}
      />
    </motion.div>
  );
};

export default ScopeTwoOverviewTab;
