import React, { useState } from "react";

import AssessmentResultsScreen from "./src/screens/AssessmentResultsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [screen, setScreen] = useState<"home" | "results">("home");

  return (
    <SafeAreaProvider>
      {screen === "home" ? (
        <HomeScreen onExperienceVani={() => setScreen("results")} />
      ) : (
        <AssessmentResultsScreen />
      )}
    </SafeAreaProvider>
  );
}
