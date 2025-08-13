import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3B82F6",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/explore"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/featured"
        options={{
          title: "Featured",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="star" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/clubs"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="club/[id]"
        options={{
          href: null, // This hides it from the tab bar
        }}
      />
    </Tabs>
  );
} 