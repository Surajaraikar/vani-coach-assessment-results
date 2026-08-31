import React, { useState } from "react";

import AssessmentResultsScreen from "./src/screens/AssessmentResultsScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [screen, setScreen] = useState<"home" | "results">("home");

  return screen === "home" ? (
    <HomeScreen onExperienceVani={() => setScreen("results")} />
  ) : (
    <AssessmentResultsScreen />
  );
}
