import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

interface HomeScreenProps {
  onExperienceVani: () => void;
}

export default function HomeScreen({ onExperienceVani }: HomeScreenProps) {
  const { width } = useWindowDimensions();
  const isCompact = width < 760;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.navigation}>
          <Text style={styles.logo}>VANI</Text>
          {!isCompact && (
            <View style={styles.navLinks}>
              <Text style={styles.navLink}>Overview</Text>
              <Text style={styles.navLink}>How It Works</Text>
              <Text style={styles.navLink}>Impact</Text>
              <Text style={styles.navLink}>About</Text>
            </View>
          )}
          <Pressable style={styles.demoButton} accessibilityRole="button" accessibilityLabel="Book a demo">
            <Text style={styles.demoButtonText}>{isCompact ? "Demo" : "Book Demo"}</Text>
          </Pressable>
        </View>

        <View style={[styles.hero, isCompact && styles.compactHero]}>
          <View style={styles.heroCopy}>
            <View style={styles.kicker}><View style={styles.kickerDot} /><Text style={styles.kickerText}>AI-POWERED COMMUNICATION COACHING</Text></View>
            <Text style={[styles.title, isCompact && styles.compactTitle]}>Communication that{`\n`}makes people <Text style={styles.titleAccent}>perform</Text>{`\n`}better.</Text>
            <Text style={[styles.description, isCompact && styles.compactDescription]}>Personalized AI coaching that helps teams communicate clearly, confidently and effectively.</Text>
            <View style={styles.actions}>
              <Pressable onPress={onExperienceVani} style={styles.primaryButton} accessibilityRole="button" accessibilityLabel="Experience Vani and view assessment results">
                <Text style={styles.primaryButtonText}>Experience Vani</Text>
                <Text style={styles.primaryArrow}>↗</Text>
              </Pressable>
            </View>
          </View>

          <View style={[styles.illustrationArea, isCompact && styles.compactIllustration]} accessible accessibilityLabel="Illustration of Vani communication coaching on a mobile phone">
            <View style={styles.glow} />
            <View style={styles.phone}>
              <View style={styles.phoneNotch} />
              <View style={styles.phoneTop}><Text style={styles.phoneBrand}>VANI</Text><Text style={styles.phoneMenu}>•••</Text></View>
              <Text style={styles.phoneGreeting}>Good morning, Alex</Text>
              <Text style={styles.phonePrompt}>Ready to sharpen your voice?</Text>
              <View style={styles.progressCard}><View style={styles.progressTop}><Text style={styles.cardLabel}>WEEKLY PROGRESS</Text><Text style={styles.progressPercent}>78%</Text></View><View style={styles.progressTrack}><View style={styles.progressFill} /></View><Text style={styles.progressHint}>You&apos;re on a great streak</Text></View>
              <View style={styles.coachCard}><View style={styles.coachIcon}><Text style={styles.coachIconText}>✦</Text></View><View><Text style={styles.cardLabel}>AI COACH INSIGHT</Text><Text style={styles.coachText}>Lead with clarity.</Text></View></View>
              <View style={styles.phoneBottom}><Text style={styles.bottomIcon}>⌂</Text><Text style={styles.bottomIcon}>◌</Text><Text style={styles.bottomIconActive}>◉</Text><Text style={styles.bottomIcon}>◎</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.metrics}>
          <Metric value="120+" label="Clients" />
          <Metric value="34K+" label="Employees" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <View style={styles.metric}><Text style={styles.metricValue}>{value}</Text><Text style={styles.metricLabel}>{label}</Text></View>;
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, flex: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: 40, paddingHorizontal: spacing.page },
  navigation: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingTop: 24 },
  logo: { color: colors.primaryText, ...typography.logo },
  navLinks: { alignItems: "center", flexDirection: "row", gap: 32, marginLeft: 45 },
  navLink: { color: colors.secondaryText, fontSize: 13, fontWeight: "600" },
  demoButton: { borderColor: colors.border, borderRadius: 99, borderWidth: 1, paddingHorizontal: 18, paddingVertical: 10 },
  demoButtonText: { color: colors.primaryText, fontSize: 12, fontWeight: "800" },
  hero: { alignItems: "center", flex: 1, flexDirection: "row", gap: 30, justifyContent: "space-between", minHeight: 560, paddingVertical: 58 },
  compactHero: { flexDirection: "column", gap: 0, paddingTop: 45 },
  heroCopy: { flex: 1, maxWidth: 590 },
  kicker: { alignItems: "center", alignSelf: "flex-start", backgroundColor: colors.lightOrange, borderRadius: 99, flexDirection: "row", paddingHorizontal: 12, paddingVertical: 8 },
  kickerDot: { backgroundColor: colors.orangeAccent, borderRadius: 4, height: 7, marginRight: 7, width: 7 },
  kickerText: { color: colors.orangeAccent, fontSize: 10, fontWeight: "900", letterSpacing: 1 },
  title: { color: colors.primaryText, fontSize: 55, fontWeight: "900", letterSpacing: -2, lineHeight: 61, marginTop: 24 },
  compactTitle: { fontSize: 39, letterSpacing: -1, lineHeight: 44, marginTop: 20 },
  titleAccent: { color: colors.orangeAccent },
  description: { color: colors.secondaryText, fontSize: 17, lineHeight: 26, marginTop: 22, maxWidth: 480 },
  compactDescription: { fontSize: 15, lineHeight: 23, marginTop: 17 },
  actions: { alignItems: "center", flexDirection: "row", marginTop: 16 },
  primaryButton: { alignItems: "center", backgroundColor: colors.primaryText, borderRadius: 9, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 14 },
  primaryButtonText: { color: colors.white, ...typography.button },
  primaryArrow: { color: colors.orangeAccent, fontSize: 17, marginLeft: 10 },
  illustrationArea: { alignItems: "center", flex: 0.8, justifyContent: "center", minHeight: 500, minWidth: 280 },
  compactIllustration: { minHeight: 450, minWidth: 0, width: "100%" },
  glow: { backgroundColor: "#FFD9BE", borderRadius: 180, height: 350, opacity: 0.45, position: "absolute", transform: [{ rotate: "18deg" }], width: 280 },
  phone: { backgroundColor: colors.primaryText, borderColor: "#40465A", borderRadius: 35, borderWidth: 7, elevation: 12, height: 470, overflow: "hidden", padding: 20, shadowColor: colors.primaryText, shadowOffset: { height: 16, width: 4 }, shadowOpacity: 0.25, shadowRadius: 22, width: 255 },
  phoneNotch: { alignSelf: "center", backgroundColor: "#0E1220", borderRadius: 6, height: 7, position: "absolute", top: 8, width: 70 },
  phoneTop: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: 9 },
  phoneBrand: { color: "#F7F5EF", fontSize: 12, fontWeight: "900", letterSpacing: 2 },
  phoneMenu: { color: "#A3A9B8", fontSize: 12 },
  phoneGreeting: { color: "#FFFFFF", fontSize: 18, fontWeight: "800", marginTop: 32 },
  phonePrompt: { color: "#A9B0C0", fontSize: 11, marginTop: 5 },
  progressCard: { backgroundColor: "#30374B", borderRadius: 15, marginTop: 25, padding: 14 },
  progressTop: { flexDirection: "row", justifyContent: "space-between" },
  cardLabel: { color: "#A9B0C0", fontSize: 8, fontWeight: "900", letterSpacing: 0.7 },
  progressPercent: { color: colors.orangeAccent, fontSize: 16, fontWeight: "900" },
  progressTrack: { backgroundColor: "#4B5265", borderRadius: 5, height: 7, marginTop: 14 },
  progressFill: { backgroundColor: colors.orangeAccent, borderRadius: 5, height: 7, width: "78%" },
  progressHint: { color: "#DDE0E7", fontSize: 10, marginTop: 12 },
  coachCard: { alignItems: "center", backgroundColor: colors.lightOrange, borderRadius: 15, flexDirection: "row", marginTop: 13, padding: 13 },
  coachIcon: { alignItems: "center", backgroundColor: colors.orangeAccent, borderRadius: 18, height: 36, justifyContent: "center", marginRight: 10, width: 36 },
  coachIconText: { color: "#FFFFFF", fontSize: 19 },
  coachText: { color: "#33394A", fontSize: 12, fontWeight: "800", marginTop: 5 },
  phoneBottom: { alignItems: "center", bottom: 16, flexDirection: "row", justifyContent: "space-around", left: 20, position: "absolute", right: 20 },
  bottomIcon: { color: "#777F92", fontSize: 19 },
  bottomIconActive: { color: colors.orangeAccent, fontSize: 19 },
  metrics: { borderColor: colors.border, borderTopWidth: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingTop: 25, rowGap: 18 },
  metric: { alignItems: "center", flexDirection: "row", gap: 9, minWidth: 125 },
  metricValue: { color: colors.primaryText, fontSize: 25, fontWeight: "900" },
  metricLabel: { alignSelf: "center", color: colors.secondaryText, fontSize: 12 },
});
