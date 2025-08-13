import { FontAwesome5 } from '@expo/vector-icons';
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Index() {
  const { isAuthenticated } = useAuth();

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <View className="px-6 pt-16 pb-8">
        {/* Header Section */}
        <View className="items-center mb-12">
          <View className="bg-blue-500 w-20 h-20 rounded-full items-center justify-center mb-4">
            <FontAwesome5 name="futbol" size={32} color="white" />
          </View>
          <Text className="text-4xl font-bold text-gray-900 mb-3 text-center">
            Youth Sports
          </Text>
          <Text className="text-4xl font-bold text-blue-500 mb-4 text-center">
            Finder
          </Text>
          <Text className="text-lg text-gray-600 text-center leading-6">
            Discover amazing sports opportunities for your kids in your area
          </Text>
        </View>

        {!isAuthenticated ? (
          // Unauthenticated State - Focus on account creation
          <View className="space-y-6">
            {/* Primary CTA - Create Account */}
            <TouchableOpacity 
              className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl shadow-lg"
              onPress={() => router.push('/sign-up')}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-4">
                    <FontAwesome5 name="user-plus" size={20} color="white" />
                  </View>
                  <View>
                    <Text className="text-white font-bold text-xl">Create Account</Text>
                    <Text className="text-green-100 text-sm">Join our community</Text>
                  </View>
                </View>
                <FontAwesome5 name="chevron-right" size={16} color="white" />
              </View>
            </TouchableOpacity>

            {/* Secondary CTA - Sign In */}
            <TouchableOpacity 
              className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 rounded-2xl shadow-lg"
              onPress={() => router.push('/sign-in')}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-4">
                    <FontAwesome5 name="sign-in-alt" size={20} color="white" />
                  </View>
                  <View>
                    <Text className="text-white font-bold text-xl">Sign In</Text>
                    <Text className="text-gray-200 text-sm">Welcome back!</Text>
                  </View>
                </View>
                <FontAwesome5 name="chevron-right" size={16} color="white" />
              </View>
            </TouchableOpacity>

            {/* Benefits Section */}
            <View className="bg-white rounded-2xl p-6 shadow-sm">
              <Text className="text-xl font-bold text-gray-900 mb-4">Why Create an Account?</Text>
              <View className="space-y-3">
                <View className="flex-row items-center">
                  <FontAwesome5 name="check-circle" size={16} color="#10B981" />
                  <Text className="text-gray-700 ml-3">Save your favorite clubs</Text>
                </View>
                <View className="flex-row items-center">
                  <FontAwesome5 name="check-circle" size={16} color="#10B981" />
                  <Text className="text-gray-700 ml-3">Get personalized recommendations</Text>
                </View>
                <View className="flex-row items-center">
                  <FontAwesome5 name="check-circle" size={16} color="#10B981" />
                  <Text className="text-gray-700 ml-3">Track your search history</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          // Authenticated State - Show search functionality
          <View className="space-y-4 mb-8">
            <TouchableOpacity 
              className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg"
              onPress={() => router.push('/(root)/(tabs)/explore')}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-white/20 w-12 h-12 rounded-full items-center justify-center mr-4">
                    <FontAwesome5 name="search" size={20} color="white" />
                  </View>
                  <View>
                    <Text className="text-white font-bold text-xl">Start Searching</Text>
                    <Text className="text-blue-100 text-sm">Find clubs near you</Text>
                  </View>
                </View>
                <FontAwesome5 name="chevron-right" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Popular Sports Section */}
        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900 mb-4">Popular Sports</Text>
          <View className="flex-row flex-wrap gap-3">
            {[
              { name: 'Soccer', icon: 'futbol', color: 'bg-green-500' },
              { name: 'Basketball', icon: 'basketball-ball', color: 'bg-orange-500' },
              { name: 'Swimming', icon: 'swimming-pool', color: 'bg-blue-500' },
              { name: 'Tennis', icon: 'table-tennis', color: 'bg-green-600' },
              { name: 'Baseball', icon: 'baseball-ball', color: 'bg-red-500' },
              { name: 'Gymnastics', icon: 'star', color: 'bg-purple-500' }
            ].map((sport, index) => (
              <TouchableOpacity
                key={index}
                className={`${sport.color} px-4 py-3 rounded-xl flex-row items-center`}
              >
                <FontAwesome5 name={sport.icon} size={16} color="white" />
                <Text className="text-white font-semibold ml-2">{sport.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <View className="bg-white rounded-2xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</Text>
          <View className="space-y-3">
            <View className="flex-row items-center">
              <FontAwesome5 name="check-circle" size={16} color="#10B981" />
              <Text className="text-gray-700 ml-3">Verified clubs and coaches</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome5 name="check-circle" size={16} color="#10B981" />
              <Text className="text-gray-700 ml-3">Detailed club information</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome5 name="check-circle" size={16} color="#10B981" />
              <Text className="text-gray-700 ml-3">Easy registration process</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
