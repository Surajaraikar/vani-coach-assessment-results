import React, { useMemo } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import AssessmentCard from "../components/AssessmentCard";
import EmptyState from "../components/EmptyState";
import { assessments } from "../data/assessments";
import { getAverageScore } from "../utils/assessment";

export default function AssessmentResultsScreen() {
  const completedAssessments = useMemo(
    () => assessments.filter((assessment) => assessment.status === "Completed" && assessment.score !== null),
    [],
  );
  const averageScore = useMemo(
    () => getAverageScore(completedAssessments.map((assessment) => assessment.score as number)),
    [completedAssessments],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />
      <View style={styles.fixedHeader}>
        <Text style={styles.eyebrow}>VANI COACH</Text>
        <Text style={styles.title}>Assessment Results</Text>
        <Text style={styles.subtitle}>Review your performance and feedback</Text>
      </View>
      <FlatList
        data={completedAssessments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AssessmentCard assessment={item} />}
        contentContainerStyle={[styles.content, completedAssessments.length === 0 && styles.emptyContent]}
        ListHeaderComponent={
          completedAssessments.length > 0 ? (
            <View style={styles.listHeader}>
              <View style={styles.summary}>
                <View><Text style={styles.summaryLabel}>COMPLETED</Text><Text style={styles.summaryValue}>{completedAssessments.length}</Text></View>
                <View style={styles.summaryDivider} />
                <View><Text style={styles.summaryLabel}>AVERAGE SCORE</Text><Text style={styles.summaryValue}>{averageScore ?? "—"}<Text style={styles.summaryOutOf}> / 100</Text></Text></View>
              </View>
            </View>
          ) : null
        }
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        windowSize={7}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#F5F7FB", flex: 1 },
  content: { paddingBottom: 24, paddingHorizontal: 20 },
  emptyContent: { flexGrow: 1 },
  fixedHeader: {
    backgroundColor: "#F5F7FB",
    borderBottomColor: "#E4E8F0",
    borderBottomWidth: 1,
    elevation: 4,
    paddingHorizontal: 20,
    paddingBottom: 18,
    paddingTop: 20,
    shadowColor: "#18243A",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    zIndex: 1,
  },
  listHeader: { paddingBottom: 18 },
  eyebrow: { color: "#5265D7", fontSize: 11, fontWeight: "800", letterSpacing: 1.5 },
  title: { color: "#18243A", fontSize: 29, fontWeight: "800", marginTop: 8 },
  subtitle: { color: "#7D8799", fontSize: 14, marginTop: 5 },
  summary: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#E7EBF2", borderRadius: 16, borderWidth: 1, flexDirection: "row", marginTop: 22, padding: 16 },
  summaryLabel: { color: "#8B94A5", fontSize: 10, fontWeight: "800", letterSpacing: 0.6 },
  summaryValue: { color: "#18243A", fontSize: 24, fontWeight: "800", marginTop: 3 },
  summaryOutOf: { color: "#8B94A5", fontSize: 12, fontWeight: "500" },
  summaryDivider: { backgroundColor: "#E7EBF2", height: 38, marginHorizontal: 28, width: 1 },
});
