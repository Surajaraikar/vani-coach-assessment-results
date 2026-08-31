import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Assessment } from "../types/assessment";
import { getPerformance } from "../utils/assessment";
import ScoreBadge from "./ScoreBadge";

interface AssessmentCardProps {
  assessment: Assessment;
}

function AssessmentCard({ assessment }: AssessmentCardProps) {
  if (assessment.score === null) return null;

  const performance = getPerformance(assessment.score);

  return (
    <View style={styles.card} accessible accessibilityLabel={`${assessment.type} assessment: ${assessment.question}`}>
      <View style={styles.topRow}>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{assessment.type}</Text>
        </View>
        <ScoreBadge performance={performance} />
      </View>

      <Text style={styles.question}>{assessment.question}</Text>

      <View style={styles.scoreRow}>
        <Text style={styles.score}>{assessment.score}</Text>
        <Text style={styles.outOf}> / 100</Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.feedbackLabel}>AI FEEDBACK</Text>
      <Text style={styles.feedback}>{assessment.feedback ?? "Feedback unavailable"}</Text>
    </View>
  );
}

export default React.memo(AssessmentCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E7EBF2",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 14,
    padding: 18,
    shadowColor: "#1B2B4B",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  topRow: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  typeBadge: { backgroundColor: "#EEF2FF", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  typeText: { color: "#4454B8", fontSize: 12, fontWeight: "700" },
  question: { color: "#18243A", fontSize: 18, fontWeight: "700", lineHeight: 25, marginTop: 16 },
  scoreRow: { alignItems: "baseline", flexDirection: "row", marginTop: 14 },
  score: { color: "#18243A", fontSize: 34, fontWeight: "800" },
  outOf: { color: "#7D8799", fontSize: 14, marginLeft: 2 },
  divider: { backgroundColor: "#EDF0F5", height: 1, marginVertical: 16 },
  feedbackLabel: { color: "#7D8799", fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
  feedback: { color: "#4E5A70", fontSize: 14, lineHeight: 21, marginTop: 7 },
});
