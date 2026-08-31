export type Performance = "Good" | "Needs Improvement";

export const getPerformance = (score: number): Performance =>
  score >= 70 ? "Good" : "Needs Improvement";

export const getAverageScore = (scores: number[]): number | null => {
  if (scores.length === 0) return null;
  return Math.round(scores.reduce((total, score) => total + score, 0) / scores.length);
};
