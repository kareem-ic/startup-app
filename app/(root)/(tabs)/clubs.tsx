import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { mockClubs } from '../../data/mockClubs';

const Featured = () => {
  const featuredClubs = mockClubs.slice(0, 3); // Show first 3 as featured

  const handleClubPress = (clubId: string) => {
    router.push(`/club/${clubId}`);
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <Text className="text-2xl font-bold mb-6 text-center">Featured Clubs</Text>
      
      <ScrollView className="flex-1">
        {featuredClubs.map(club => (
          <TouchableOpacity 
            key={club.id} 
            className="bg-white p-4 rounded-lg mb-4 border border-gray-200"
            onPress={() => handleClubPress(club.id)}
          >
            <View className="flex-row items-center mb-2">
              <Text className="text-lg font-semibold flex-1">{club.name}</Text>
              <Text className="text-yellow-500">⭐</Text>
            </View>
            <Text className="text-gray-600">{club.sport} • {club.city}</Text>
            <Text className="text-gray-500">{club.ageRange} • {club.competitiveLevel}</Text>
            <Text className="text-gray-500">{club.fees}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured; 