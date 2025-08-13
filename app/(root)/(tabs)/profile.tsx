import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';

const Profile = () => {
  const { user, isAuthenticated, signOut, loading } = useAuth();
  const { favorites } = useFavorites();
  
  // Profile editing state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editLoading, setEditLoading] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  const handleEditProfile = () => {
    setEditName(user?.name || '');
    setEditEmail(user?.email || '');
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditName('');
    setEditEmail('');
  };

  const handleSaveProfile = async () => {
    if (!editName.trim() || !editEmail.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!editEmail.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setEditLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd call an API to update the user
    // For now, we'll just show success and close editing mode
    Alert.alert('Success', 'Profile updated successfully!');
    setIsEditing(false);
    setEditLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text className="text-lg mb-4 text-center">Sign in to view your favorite clubs</Text>
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
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-semibold">Account Information</Text>
            {!isEditing && (
              <TouchableOpacity 
                className="bg-blue-500 px-4 py-2 rounded-lg"
                onPress={handleEditProfile}
              >
                <Text className="text-white font-medium">Edit</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {isEditing ? (
            // Edit Mode
            <View className="space-y-4">
              <View>
                <Text className="text-gray-600 mb-2">Name</Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg bg-white"
                  value={editName}
                  onChangeText={setEditName}
                  placeholder="Enter your name"
                />
              </View>
              <View>
                <Text className="text-gray-600 mb-2">Email</Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg bg-white"
                  value={editEmail}
                  onChangeText={setEditEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              {/* Edit Action Buttons */}
              <View className="flex-row space-x-3 mt-4">
                <TouchableOpacity 
                  className="flex-1 bg-gray-500 py-3 rounded-lg"
                  onPress={handleCancelEdit}
                  disabled={editLoading}
                >
                  <Text className="text-white text-center font-semibold">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="flex-1 bg-green-500 py-3 rounded-lg"
                  onPress={handleSaveProfile}
                  disabled={editLoading}
                >
                  <Text className="text-white text-center font-semibold">
                    {editLoading ? 'Saving...' : 'Save'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // View Mode
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
          )}
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