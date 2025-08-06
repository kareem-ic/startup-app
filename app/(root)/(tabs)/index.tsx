import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

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
      
      <View className="space-y-4 w-full">
        <TouchableOpacity 
          className="bg-blue-500 px-6 py-3 rounded-lg"
          onPress={() => router.push('/(root)/(tabs)/explore')}
        >
          <Text className="text-white font-semibold text-center">Start Searching</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-green-500 px-6 py-3 rounded-lg"
          onPress={() => router.push('/sign-up')}
        >
          <Text className="text-white font-semibold text-center">Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-gray-500 px-6 py-3 rounded-lg"
          onPress={() => router.push('/sign-in')}
        >
          <Text className="text-white font-semibold text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
