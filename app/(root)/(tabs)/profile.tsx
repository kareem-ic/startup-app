import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';

const Profile = () => {
  const { user, isAuthenticated, signOut, loading } = useAuth();
  const { favorites } = useFavorites();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text className="text-lg mb-4">You are not signed in.</Text>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg mb-3" onPress={() => router.push('/sign-in')}>
          <Text className="text-white font-semibold">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-600 px-6 py-3 rounded-lg" onPress={() => router.push('/sign-up')}>
          <Text className="text-white font-semibold">Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
              <Text className="text-lg font-medium">{user?.name}</Text>
            </View>
            <View>
              <Text className="text-gray-600">Email</Text>
              <Text className="text-lg font-medium">{user?.email}</Text>
            </View>
          </View>
        </View>

        {/* Favorites Summary */}
        <View className="bg-white rounded-lg p-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-semibold">Favorite Clubs</Text>
            <TouchableOpacity 
              className="bg-blue-500 px-4 py-2 rounded-lg"
              onPress={() => router.push('/(root)/(tabs)/clubs')}
            >
              <Text className="text-white font-medium">View All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center">
            <FontAwesome5 name="heart" size={20} color="#EF4444" />
            <Text className="text-lg font-medium ml-2">{favorites.length}</Text>
            <Text className="text-gray-600 ml-2">clubs saved</Text>
          </View>
        </View>

        {/* Actions */}
        <View className="space-y-3">
          <TouchableOpacity className="bg-red-500 py-3 rounded-lg" onPress={handleSignOut} disabled={loading}>
            <Text className="text-white text-center font-semibold">{loading ? 'Signing Out...' : 'Sign Out'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;