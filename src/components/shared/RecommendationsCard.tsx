
import React from 'react';
import { Target, Zap, ChartBar, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import InquiryDialog from './InquiryDialog';

interface RecommendationsCardProps {
  recommendations: string[];
  title?: string;
  description?: string;
  onDetailedDiagnostics: () => void;
  onConsultantContact?: () => void;
}

const RecommendationsCard: React.FC<RecommendationsCardProps> = ({ 
  recommendations,
  title = "推奨アクション",
  description = "あなたの組織のGX対応度を向上させるための推奨事項",
  onDetailedDiagnostics,
  onConsultantContact
}) => {
  const handleConsultantContact = () => {
    window.open('https://form.typeform.com/to/Qv6t1Q', '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-green-600" />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-2">
              <Zap className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Separator />
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button 
            onClick={onDetailedDiagnostics}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 w-full sm:w-auto gap-2"
          >
            <ChartBar className="h-4 w-4" />
            詳細診断を申し込む
          </Button>
          <Button 
            variant="outline" 
            onClick={handleConsultantContact}
            className="w-full sm:w-auto gap-2"
          >
            <ArrowRight className="h-4 w-4" />
            コンサルタントに相談する
          </Button>
          <InquiryDialog />
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecommendationsCard;
