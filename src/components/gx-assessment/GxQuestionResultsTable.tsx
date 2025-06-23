
import React from 'react';
import { gxQuestionData } from './GxQuestionData';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GxQuestionResultsTableProps {
  categoryScores: Record<string, number>;
  answers: Record<string, boolean>;
}

const GxQuestionResultsTable: React.FC<GxQuestionResultsTableProps> = ({ 
  categoryScores,
  answers
}) => {
  return (
    <Card className="border-green-100 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          GX対応度診断：質問と結果の対応表
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>GX対応度診断の質問と回答および集計結果</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">カテゴリ</TableHead>
              <TableHead>質問</TableHead>
              <TableHead className="w-[100px]">回答</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(gxQuestionData).map(([category, questions]) => (
              <React.Fragment key={category}>
                {questions.map((question, qIndex) => (
                  <TableRow key={question.id} className={qIndex === 0 ? "border-t-2 border-green-100" : ""}>
                    {qIndex === 0 ? (
                      <TableCell className="font-medium" rowSpan={questions.length}>
                        {category}
                        <div className="text-sm text-green-600 mt-2">
                          スコア: {categoryScores[category]}%
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ({questions.filter(q => answers[q.id]).length}/{questions.length}項目)
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

export default GxQuestionResultsTable;
