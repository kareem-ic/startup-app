import { Stack } from "expo-router";

import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Stack>
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack>
      </FavoritesProvider>
    </AuthProvider>
  );
}
