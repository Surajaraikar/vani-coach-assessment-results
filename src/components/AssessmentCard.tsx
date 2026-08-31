import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Assessment } from "../types/assessment";
import { getPerformance } from "../utils/assessment";
import ScoreBadge from "./ScoreBadge";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

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
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 14,
    padding: spacing.card,
    shadowColor: colors.primaryText,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  topRow: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  typeBadge: { backgroundColor: colors.lightOrange, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  typeText: { color: colors.orangeAccent, fontSize: 12, fontWeight: "700" },
  question: { color: colors.primaryText, fontSize: 18, fontWeight: "700", lineHeight: 25, marginTop: spacing.md },
  scoreRow: { alignItems: "baseline", flexDirection: "row", marginTop: 14 },
  score: { color: colors.primaryText, fontSize: 34, fontWeight: "800" },
  outOf: { color: colors.secondaryText, fontSize: 14, marginLeft: 2 },
  divider: { backgroundColor: colors.border, height: 1, marginVertical: spacing.md },
  feedbackLabel: { color: colors.secondaryText, fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
  feedback: { color: colors.secondaryText, fontSize: 14, lineHeight: 21, marginTop: 7 },
});
