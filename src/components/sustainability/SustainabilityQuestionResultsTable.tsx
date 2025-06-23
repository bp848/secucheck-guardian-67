
import React from 'react';
import { sustainabilityQuestions } from './QuestionData';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SustainabilityQuestionResultsTableProps {
  categoryScores: Record<string, number>;
  answers: Record<string, boolean>;
}

const SustainabilityQuestionResultsTable: React.FC<SustainabilityQuestionResultsTableProps> = ({ 
  categoryScores,
  answers
}) => {
  return (
    <Card className="border-blue-100 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          サステナビリティ診断：質問と結果の対応表
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>サステナビリティ診断の質問と回答および集計結果</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">カテゴリ</TableHead>
              <TableHead>質問</TableHead>
              <TableHead className="w-[100px]">回答</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sustainabilityQuestions.map((categoryData, categoryIndex) => (
              <React.Fragment key={categoryData.category}>
                {categoryData.questions.map((question, qIndex) => (
                  <TableRow key={question.id} className={qIndex === 0 ? "border-t-2 border-blue-100" : ""}>
                    {qIndex === 0 ? (
                      <TableCell className="font-medium" rowSpan={categoryData.questions.length}>
                        {categoryData.category}
                        <div className="text-sm text-blue-600 mt-2">
                          スコア: {categoryScores[categoryData.category]}%
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ({categoryData.questions.filter(q => answers[q.id]).length}/{categoryData.questions.length}項目)
                        </div>
                      </TableCell>
                    ) : null}
                    <TableCell>{question.text}</TableCell>
                    <TableCell className={answers[question.id] ? "text-green-600" : "text-red-500"}>
                      {answers[question.id] ? "はい" : "いいえ"}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SustainabilityQuestionResultsTable;
