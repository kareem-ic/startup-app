import { FontAwesome5 } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import { mockClubs } from '../../data/mockClubs';

export default function ClubDetail() {
  const { id } = useLocalSearchParams();
  const club = mockClubs.find(c => c.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();

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

  const handleJoinClub = () => {
    alert(`Thank you for your interest in ${club.name}! We'll contact you soon with registration details.`);
  };

  const handleContactClub = () => {
    // In a real app, this would open phone/email
    alert(`Contact ${club.name} at ${club.contactInfo}`);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header with Back Button */}
        <View className="flex-row items-center mb-6 pt-12">
          <TouchableOpacity 
            className="mr-4"
            onPress={() => router.back()}
          >
            <FontAwesome5 name="arrow-left" size={20} color="#3B82F6" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">Club Details</Text>
        </View>

        {/* Club Header */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <View className="flex-row items-start justify-between mb-4">
            <View className="flex-1">
              <Text className="text-2xl font-bold mb-2">{club.name}</Text>
              <Text className="text-lg text-gray-600 mb-4">{club.sport}</Text>
            </View>
            
            <TouchableOpacity 
              onPress={() => toggleFavorite(club)}
              className="p-3"
            >
              <FontAwesome5 
                name={isFavorite(club.id) ? "heart" : "heart"} 
                size={24} 
                color={isFavorite(club.id) ? "#EF4444" : "#D1D5DB"} 
                solid={isFavorite(club.id)}
              />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row items-center mb-3">
            <FontAwesome5 name="map-marker-alt" size={16} color="#6B7280" />
            <Text className="text-gray-700 ml-2">{club.location}</Text>
          </View>
          
          <View className="flex-row items-center mb-3">
            <FontAwesome5 name="city" size={16} color="#6B7280" />
            <Text className="text-gray-700 ml-2">{club.city}, {club.zipCode}</Text>
          </View>
        </View>

        {/* Club Details */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Club Information</Text>
          
          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Age Range</Text>
              <Text className="font-medium">{club.ageRange}</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Competitive Level</Text>
              <Text className="font-medium capitalize">{club.competitiveLevel}</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Monthly Fees</Text>
              <Text className="font-medium">{club.fees}</Text>
            </View>
          </View>
        </View>

        {/* Contact Information */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Contact Information</Text>
          <View className="space-y-3">
            <View className="flex-row items-center">
              <FontAwesome5 name="phone" size={16} color="#6B7280" />
              <Text className="text-gray-700 ml-3">{club.contactInfo}</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome5 name="envelope" size={16} color="#6B7280" />
              <Text className="text-gray-700 ml-3">info@{club.name.toLowerCase().replace(/\s+/g, '')}.com</Text>
            </View>
          </View>
        </View>

        {/* Mock Reviews */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Reviews</Text>
          <View className="space-y-3">
            <View className="border-b border-gray-100 pb-3">
              <View className="flex-row items-center mb-2">
                <Text className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</Text>
                <Text className="font-medium">Sarah M.</Text>
              </View>
              <Text className="text-gray-600">"Great coaching staff and excellent facilities. My son has improved so much!"</Text>
            </View>
            <View className="border-b border-gray-100 pb-3">
              <Text className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</Text>
              <Text className="font-medium">Mike R.</Text>
              <Text className="text-gray-600 ml-2">"Professional organization with a focus on skill development."</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="space-y-3 mb-6">
          <TouchableOpacity 
            className="bg-green-500 py-4 rounded-lg"
            onPress={handleJoinClub}
          >
            <Text className="text-white text-center font-semibold text-lg">Join Club</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="bg-blue-500 py-4 rounded-lg"
            onPress={handleContactClub}
          >
            <Text className="text-white text-center font-semibold text-lg">Contact Club</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 