import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Performance } from "../utils/assessment";

interface ScoreBadgeProps {
  performance: Performance;
}

export default function ScoreBadge({ performance }: ScoreBadgeProps) {
  const isGood = performance === "Good";

  return (
    <View
      accessible
      accessibilityLabel={`Performance: ${performance}`}
      style={[styles.badge, isGood ? styles.good : styles.needsImprovement]}
    >
      <View style={[styles.dot, isGood ? styles.goodDot : styles.needsDot]} />
      <Text style={[styles.text, isGood ? styles.goodText : styles.needsText]}>
        {performance}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    borderRadius: 99,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  good: { backgroundColor: "#E6F8EF" },
  needsImprovement: { backgroundColor: "#FFF2E5" },
  dot: { borderRadius: 4, height: 7, marginRight: 6, width: 7 },
  goodDot: { backgroundColor: "#159A62" },
  needsDot: { backgroundColor: "#D97918" },
  text: { fontSize: 12, fontWeight: "700" },
  goodText: { color: "#087344" },
  needsText: { color: "#A65308" },
});
