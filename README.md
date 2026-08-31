# Vani Coach — Assessment Results

An Expo + React Native + TypeScript implementation of an assessment-results screen for an AI communication coaching platform.

## Setup

```bash
npm install
npm start
```

Use the Expo QR code, or run `npm run android`, `npm run ios`, or `npm run web` to open the app in Chrome. Type-check with `npm run typecheck`.

## Architecture

- `src/types` defines the assessment model and its allowed values.
- `src/data` contains the mock assessment attempts.
- `src/components` contains reusable cards, badges, and the empty state.
- `src/screens` owns list composition and summary calculations.
- `src/utils` isolates business logic such as performance classification.

## Technical decisions

### Completed assessments

Only assessments with `status: "Completed"` and a non-null score are displayed. Pending assessments do not yet have results or feedback, so they are intentionally excluded.

### FlatList and performance

`FlatList` is used instead of `ScrollView` plus `map()` because assessment history may grow. It virtualizes rows and avoids rendering the entire dataset at once. Stable IDs are used with `keyExtractor`, the completed filter is memoized, and `AssessmentCard` is wrapped in `React.memo`.

### Performance classification

The requirements do not specify a numerical threshold. This implementation uses `score >= 70` for **Good** and lower scores for **Needs Improvement**. The rule lives in `getPerformance` so product can change it in one place.

### Edge cases

The screen provides an empty state when no completed attempts exist, safely handles missing score/feedback values, and avoids rendering incomplete cards.

Global state, navigation, backend APIs, and extra dependencies were intentionally omitted because they are not needed for this isolated screen.
