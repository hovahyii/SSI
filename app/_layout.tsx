import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Hide the splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [fontsLoaded]);

  // If fonts are not loaded, return null (to prevent rendering incomplete UI)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        {/* Tabs navigation for the main app */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Create Wallet Screen */}
        <Stack.Screen
          name="createwallet"
          options={{
            title: "Create Wallet",
            headerShown: true, // Show header for this screen
          }}
        />

        {/* Catch-all route for undefined pages */}
        <Stack.Screen name="+not-found" options={{ title: "Page Not Found" }} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
