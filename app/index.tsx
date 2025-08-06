import { FontAwesome5 } from '@expo/vector-icons';
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // Mock authentication state - later this will come from your auth system
  const isAuthenticated = false; // Set to false to show the unauthenticated state

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <View className="px-6 pt-12 pb-8">
        {/* Header Section */}
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Youth Sports
          </Text>
          <Text className="text-4xl font-bold text-blue-500 mb-3 text-center">
            Finder
          </Text>
          <Text className="text-lg text-gray-600 text-center leading-6">
            Discover amazing sports opportunities for your kids in your area
          </Text>
        </View>

        {!isAuthenticated ? (
          // Unauthenticated State - Focus on account creation
          <View>
            {/* Information Section - Moved up */}
            <View className="mb-8">
              <Text className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Everything you need to find the perfect sports program
              </Text>
              
              <View className="space-y-4">
                <View className="flex-row items-start">
                  <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center mr-3 mt-1">
                    <FontAwesome5 name="heart" size={14} color="#3B82F6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-900 mb-1">Save Your Favorites</Text>
                    <Text className="text-gray-600 leading-5 text-sm">Bookmark clubs you love and get notified about new programs</Text>
                  </View>
                </View>

                <View className="flex-row items-start">
                  <View className="bg-green-100 w-8 h-8 rounded-full items-center justify-center mr-3 mt-1">
                    <FontAwesome5 name="star" size={14} color="#10B981" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-900 mb-1">Personalized Recommendations</Text>
                    <Text className="text-gray-600 leading-5 text-sm">Get suggestions based on your location and preferences</Text>
                  </View>
                </View>

                <View className="flex-row items-start">
                  <View className="bg-purple-100 w-8 h-8 rounded-full items-center justify-center mr-3 mt-1">
                    <FontAwesome5 name="shield-alt" size={14} color="#8B5CF6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-900 mb-1">Verified Programs</Text>
                    <Text className="text-gray-600 leading-5 text-sm">All clubs and coaches are thoroughly vetted for safety</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Primary CTA - Create Account (Oval shape) */}
            <TouchableOpacity 
              style={{ backgroundColor: '#8B5CF6' }}
              className="py-4 px-8 rounded-full shadow-xl mb-4"
              onPress={() => router.push('/sign-up')}
            >
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="user-plus" size={18} color="white" />
                <Text className="text-white font-bold text-lg ml-3">Create Account</Text>
              </View>
            </TouchableOpacity>

            {/* Secondary CTA - Sign In (Wide oval shape like image) */}
            <TouchableOpacity 
              style={{ backgroundColor: '#3B82F6' }}
              className="py-4 px-12 rounded-full shadow-xl"
              onPress={() => router.push('/sign-in')}
            >
              <Text className="text-white font-bold text-lg text-center">Sign In</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Authenticated State - Show search functionality
          <View className="space-y-4 mb-8">
            <TouchableOpacity 
              style={{ backgroundColor: '#3B82F6' }}
              className="p-6 rounded-2xl shadow-lg"
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
      </View>
    </ScrollView>
  );
} 