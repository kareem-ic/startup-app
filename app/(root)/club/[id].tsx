import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { mockClubs } from '../../data/mockClubs';

export default function ClubDetail() {
  const { id } = useLocalSearchParams();
  const club = mockClubs.find(c => c.id === id);

  if (!club) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text className="text-lg">Club not found</Text>
        <TouchableOpacity 
          className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
          onPress={() => router.back()}
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-2xl font-bold mb-2">{club.name}</Text>
          <Text className="text-lg text-gray-600 mb-4">{club.sport}</Text>
          
          <View className="flex-row items-center mb-3">
            <Text className="text-gray-500 mr-2">📍</Text>
            <Text className="text-gray-700">{club.location}</Text>
          </View>
          
          <View className="flex-row items-center mb-3">
            <Text className="text-gray-500 mr-2">🏙️</Text>
            <Text className="text-gray-700">{club.city}, {club.zipCode}</Text>
          </View>
        </View>

        {/* Details */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Club Details</Text>
          
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Age Range:</Text>
              <Text className="font-medium">{club.ageRange}</Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Level:</Text>
              <Text className="font-medium capitalize">{club.competitiveLevel}</Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Fees:</Text>
              <Text className="font-medium">{club.fees}</Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Contact Information</Text>
          <Text className="text-gray-700">{club.contactInfo}</Text>
        </View>

        {/* Actions */}
        <View className="space-y-3">
          <TouchableOpacity className="bg-blue-500 py-4 rounded-lg">
            <Text className="text-white text-center font-semibold text-lg">Contact Club</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-200 py-4 rounded-lg">
            <Text className="text-gray-700 text-center font-semibold text-lg">Save to Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 