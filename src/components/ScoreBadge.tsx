import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Performance } from "../utils/assessment";
import { colors } from "../theme/colors";

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
  good: { backgroundColor: colors.successBackground },
  needsImprovement: { backgroundColor: colors.lightOrange },
  dot: { borderRadius: 4, height: 7, marginRight: 6, width: 7 },
  goodDot: { backgroundColor: colors.success },
  needsDot: { backgroundColor: colors.orangeAccent },
  text: { fontSize: 12, fontWeight: "700" },
  goodText: { color: colors.success },
  needsText: { color: "#B35D27" },
});
