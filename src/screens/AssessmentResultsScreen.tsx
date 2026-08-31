import React, { useMemo } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import AssessmentCard from "../components/AssessmentCard";
import EmptyState from "../components/EmptyState";
import { assessments } from "../data/assessments";
import { getAverageScore } from "../utils/assessment";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

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
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
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
  safeArea: { backgroundColor: colors.background, flex: 1 },
  content: { paddingBottom: spacing.lg, paddingHorizontal: spacing.page },
  emptyContent: { flexGrow: 1 },
  fixedHeader: {
    backgroundColor: colors.background,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    elevation: 4,
    paddingHorizontal: spacing.page,
    paddingBottom: 18,
    paddingTop: 20,
    shadowColor: colors.primaryText,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    zIndex: 1,
  },
  listHeader: { paddingBottom: 18 },
  eyebrow: { color: colors.orangeAccent, ...typography.eyebrow },
  title: { color: colors.primaryText, ...typography.pageTitle, marginTop: spacing.sm },
  subtitle: { color: colors.secondaryText, ...typography.body, marginTop: 5 },
  summary: { alignItems: "center", backgroundColor: colors.card, borderColor: colors.border, borderRadius: 16, borderWidth: 1, flexDirection: "row", marginTop: spacing.lg, padding: spacing.md },
  summaryLabel: { color: colors.secondaryText, fontSize: 10, fontWeight: "800", letterSpacing: 0.6 },
  summaryValue: { color: colors.primaryText, fontSize: 24, fontWeight: "800", marginTop: 3 },
  summaryOutOf: { color: colors.secondaryText, fontSize: 12, fontWeight: "500" },
  summaryDivider: { backgroundColor: colors.border, height: 38, marginHorizontal: 28, width: 1 },
});
