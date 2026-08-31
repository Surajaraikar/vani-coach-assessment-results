import { Assessment } from "../types/assessment";

export const assessments: Assessment[] = [
  {
    id: "1",
    question: "Tell me about yourself",
    type: "Recorded",
    score: 82,
    status: "Completed",
    feedback:
      "Good structure and confidence. Try to make your introduction slightly more concise.",
  },
  {
    id: "2",
    question: "Describe a challenging situation",
    type: "Recorded",
    score: 65,
    status: "Completed",
    feedback:
      "Your answer explains the situation well, but the outcome could be communicated more clearly.",
  },
  {
    id: "3",
    question: "Write a professional email to your manager",
    type: "Text",
    score: 78,
    status: "Completed",
    feedback:
      "Clear and professional communication. Consider making the request more specific.",
  },
  {
    id: "4",
    question: "Explain your current project",
    type: "Recorded",
    score: null,
    status: "Pending",
    feedback: null,
  },
];
