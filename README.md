# Task Manager App

A full-stack mobile application for managing tasks.

## Structure
- `/frontend` - React Native Expo application
- `/backend` - Node.js/Express API server

```
Task_Manager
└─ frontend
   ├─ .expo
   │  ├─ devices.json
   │  ├─ README.md
   │  └─ types
   │     └─ router.d.ts
   ├─ app
   │  ├─ (tabs)
   │  │  ├─ explore.tsx
   │  │  ├─ index.tsx
   │  │  └─ _layout.tsx
   │  ├─ +not-found.tsx
   │  └─ _layout.tsx
   ├─ app.json
   ├─ assets
   │  ├─ fonts
   │  │  └─ SpaceMono-Regular.ttf
   │  └─ images
   │     ├─ adaptive-icon.png
   │     ├─ favicon.png
   │     ├─ icon.png
   │     ├─ partial-react-logo.png
   │     ├─ react-logo.png
   │     ├─ react-logo@2x.png
   │     ├─ react-logo@3x.png
   │     └─ splash-icon.png
   ├─ components
   │  ├─ Collapsible.tsx
   │  ├─ ExternalLink.tsx
   │  ├─ HapticTab.tsx
   │  ├─ HelloWave.tsx
   │  ├─ ParallaxScrollView.tsx
   │  ├─ ThemedText.tsx
   │  ├─ ThemedView.tsx
   │  ├─ ui
   │  │  ├─ IconSymbol.ios.tsx
   │  │  ├─ IconSymbol.tsx
   │  │  ├─ TabBarBackground.ios.tsx
   │  │  └─ TabBarBackground.tsx
   │  └─ __tests__
   │     ├─ ThemedText-test.tsx
   │     └─ __snapshots__
   │        └─ ThemedText-test.tsx.snap
   ├─ constants
   │  └─ Colors.ts
   ├─ expo-env.d.ts
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ scripts
   │  └─ reset-project.js
   └─ tsconfig.json

```