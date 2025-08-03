import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text className="font-bold text-2xl mb-4 text-center">
        Youth Sports Finder
      </Text>
      <Text className="text-lg text-gray-600 text-center mb-8">
        Find local sports leagues and clubs for your kids
      </Text>
      
      <Link href="/explore" className="bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold">Start Searching</Text>
      </Link>
    </View>
  );
} 