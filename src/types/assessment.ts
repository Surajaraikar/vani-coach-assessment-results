export type AssessmentType = "Recorded" | "Text";
export type AssessmentStatus = "Completed" | "Pending";

export interface Assessment {
  id: string;
  question: string;
  type: AssessmentType;
  score: number | null;
  status: AssessmentStatus;
  feedback: string | null;
}
