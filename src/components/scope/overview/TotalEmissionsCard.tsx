
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TotalEmissionsCardProps {
  total: number;
  unit: string;
  previousYearValue: number;
  onDownloadReport: () => void;
}

const TotalEmissionsCard: React.FC<TotalEmissionsCardProps> = ({
  total,
  unit,
  previousYearValue,
  onDownloadReport
}) => {
  const reductionPercentage = ((1 - total / previousYearValue) * 100).toFixed(1);
  
  return (
    <Card className="overflow-hidden border-purple-100 hover:border-purple-300 transition-all shadow-sm hover:shadow-md">
      <CardHeader className="bg-purple-50 border-b border-purple-100">
        <CardTitle className="text-purple-800">Scope 2 総排出量</CardTitle>
        <CardDescription>2022年度実績</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-5xl font-bold text-purple-700">{total}</span>
            <span className="text-xl ml-2 text-gray-500">{unit}</span>
            <p className="text-gray-600 mt-2">前年度比 {reductionPercentage}% 削減</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex gap-2" onClick={onDownloadReport}>
              <Download className="h-4 w-4" />
              レポート
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalEmissionsCard;
