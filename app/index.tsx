import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Redirect to the tab-based home screen
    router.replace('/(root)/(tabs)');
  }, []);

  // Return null since we're redirecting
  return null;
} 