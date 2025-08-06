import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  // Mock user data - later this will come from authentication state
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    favoriteClubs: ['Elite Soccer Academy', 'Community Basketball League']
  };

  const handleSignOut = () => {
    // Later this will clear authentication state
    router.replace('/');
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-20">
        <Text className="text-2xl font-bold mb-6 text-center">Profile</Text>
        
        {/* User Info */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold mb-4">Account Information</Text>
          <View className="space-y-3">
            <View>
              <Text className="text-gray-600">Name</Text>
              <Text className="text-lg font-medium">{mockUser.name}</Text>
            </View>
            <View>
              <Text className="text-gray-600">Email</Text>
              <Text className="text-lg font-medium">{mockUser.email}</Text>
            </View>
          </View>
        </View>

        {/* Favorite Clubs */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <Text className="text-xl font-semibold mb-4">Favorite Clubs</Text>
          {mockUser.favoriteClubs.length > 0 ? (
            mockUser.favoriteClubs.map((club, index) => (
              <View key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
                <Text className="font-medium">{club}</Text>
              </View>
            ))
          ) : (
            <Text className="text-gray-500">No favorite clubs yet</Text>
          )}
        </View>

        {/* Actions */}
        <View className="space-y-3">
          <TouchableOpacity className="bg-blue-500 py-3 rounded-lg">
            <Text className="text-white text-center font-semibold">Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-200 py-3 rounded-lg">
            <Text className="text-gray-700 text-center font-semibold">Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="bg-red-500 py-3 rounded-lg"
            onPress={handleSignOut}
          >
            <Text className="text-white text-center font-semibold">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;