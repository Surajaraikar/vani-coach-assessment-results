import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container} accessible accessibilityLabel="No completed assessments">
      <View style={styles.icon}><Text style={styles.iconText}>✓</Text></View>
      <Text style={styles.title}>No completed assessments</Text>
      <Text style={styles.description}>Complete an assessment to see your results and feedback.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingHorizontal: 24 },
  icon: { alignItems: "center", backgroundColor: "#E8EDFF", borderRadius: 32, height: 64, justifyContent: "center", marginBottom: 20, width: 64 },
  iconText: { color: "#5265D7", fontSize: 29, fontWeight: "700" },
  title: { color: "#18243A", fontSize: 19, fontWeight: "700" },
  description: { color: "#7D8799", fontSize: 14, lineHeight: 21, marginTop: 8, textAlign: "center" },
});
