
import { sustainabilityQuestions } from './QuestionData';

// カテゴリごとのスコア計算
export const calculateCategoryScores = (answers: Record<string, boolean>) => {
  const categoryScores: Record<string, number> = {};
  
  sustainabilityQuestions.forEach((categoryData) => {
    const category = categoryData.category;
    const categoryQuestions = categoryData.questions.map(q => q.id);
    const answeredYes = categoryQuestions.filter(id => answers[id]).length;
    categoryScores[category] = Math.round((answeredYes / categoryQuestions.length) * 100);
  });
  
  return categoryScores;
};

// 総合スコアの計算
export const calculateOverallScore = (answers: Record<string, boolean>) => {
  const totalQuestions = sustainabilityQuestions.reduce(
    (sum, category) => sum + category.questions.length, 0
  );
  const answeredYes = Object.values(answers).filter(Boolean).length;
  return Math.round((answeredYes / totalQuestions) * 100);
};

// 推奨事項の生成
export const generateRecommendations = (score: number, selectedSdgs: number[]) => {
  // SDGsの選択に基づいた推奨事項
  const sdgBasedRecommendations = selectedSdgs.length > 0 
    ? [`選択されたSDGs(${selectedSdgs.join(', ')})に関連する取り組みを強化しましょう`]
    : ["SDGsの目標を選択し、それに向けた取り組みを検討しましょう"];

  // スコアに基づく一般的な推奨事項
  if (score >= 80) {
    return [
      ...sdgBasedRecommendations,
      "サステナビリティ領域のリーダーとして、業界標準の策定に貢献できます",
      "取り組みの成果を定量的に測定し、外部に積極的に開示しましょう"
    ];
  } else if (score >= 60) {
    return [
      ...sdgBasedRecommendations,
      "サプライチェーン全体でのサステナビリティ推進を働きかけましょう",
      "長期的な目標設定とロードマップの策定を行いましょう"
    ];
  } else if (score >= 40) {
    return [
      ...sdgBasedRecommendations,
      "社内のサステナビリティ推進体制を整備しましょう",
      "環境負荷の測定と削減計画の策定を優先しましょう"
    ];
  } else {
    return [
      ...sdgBasedRecommendations,
      "まずは基本的なサステナビリティの理解と社内啓発から始めましょう",
      "短期的に実現可能な取り組みから着手しましょう"
    ];
  }
};

// 結果オブジェクトの生成
export const generateResultsObject = (
  answers: Record<string, boolean>,
  selectedSdgs: number[]
) => {
  const overallScore = calculateOverallScore(answers);
  const categoryScores = calculateCategoryScores(answers);
  
  return {
    overallScore,
    categoryScores,
    recommendations: generateRecommendations(overallScore, selectedSdgs)
  };
};
