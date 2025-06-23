
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChartIcon } from 'lucide-react';

interface GxResultDetailChartProps {
  categoryScores: Record<string, number>;
}

const GxResultDetailChart: React.FC<GxResultDetailChartProps> = ({ categoryScores }) => {
  // スコアデータをチャート用に変換
  const chartData = Object.entries(categoryScores).map(([name, value]) => ({
    name,
    value,
    // グラフの見栄えを良くするため低いスコアでも最低限のサイズを確保
    normalizedValue: Math.max(value, 10)
  }));
  
  // カラー配列 - カテゴリごとに異なる色
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#a855f7', '#ec4899'];
  
  return (
    <Card className="border-green-100 hover:border-green-200 transition-all shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <PieChartIcon className="h-5 w-5 mr-2 text-green-600" />
          GX対応度詳細分析
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="normalizedValue"
                nameKey="name"
                label={({name, value}) => `${name}: ${value}%`}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number, name: string) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {chartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-xs truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GxResultDetailChart;
