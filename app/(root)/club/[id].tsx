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
    alert(`Contact ${club.name} at ${club.contactInfo}`);
  };

  const getCompetitiveLevelColor = (level: string) => {
    switch (level) {
      case 'elite': return '#DC2626'; // Red
      case 'travel': return '#F59E0B'; // Amber
      case 'recreational': return '#10B981'; // Green
      default: return '#6B7280'; // Gray
    }
  };

  const getCompetitiveLevelIcon = (level: string) => {
    switch (level) {
      case 'elite': return 'trophy';
      case 'travel': return 'medal';
      case 'recreational': return 'star';
      default: return 'circle';
    }
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
              {club.teamName && (
                <Text className="text-lg text-blue-600 font-semibold mb-2">{club.teamName}</Text>
              )}
              <View className="flex-row items-center mb-3">
                <Text className="text-lg text-gray-600 mr-3">{club.sport}</Text>
                <View className="flex-row items-center">
                  <FontAwesome5 
                    name={getCompetitiveLevelIcon(club.competitiveLevel)} 
                    size={16} 
                    color={getCompetitiveLevelColor(club.competitiveLevel)} 
                  />
                  <Text 
                    className="ml-2 capitalize font-medium"
                    style={{ color: getCompetitiveLevelColor(club.competitiveLevel) }}
                  >
                    {club.competitiveLevel}
                  </Text>
                </View>
              </View>
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

          {club.ageGroup && (
            <View className="flex-row items-center">
              <FontAwesome5 name="calendar" size={16} color="#6B7280" />
              <Text className="text-gray-700 ml-2">Birth Year: {club.ageGroup}</Text>
            </View>
          )}
        </View>

        {/* Club Description */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">About This Club</Text>
          <Text className="text-gray-700 leading-6">{club.description}</Text>
        </View>

        {/* Club Details */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Program Information</Text>
          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Age Range</Text>
              <Text className="font-medium">{club.ageRange}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Season</Text>
              <Text className="font-medium">{club.season}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Monthly Fees</Text>
              <Text className="font-medium">{club.fees}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Available Spots</Text>
              <Text className="font-medium">{club.maxPlayers - club.currentPlayers} of {club.maxPlayers}</Text>
            </View>
          </View>
        </View>

        {/* Practice Schedule */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Practice Schedule</Text>
          <View className="flex-row flex-wrap">
            {club.practiceDays.map((day, index) => (
              <View key={index} className="bg-blue-100 px-3 py-2 rounded-lg mr-2 mb-2">
                <Text className="text-blue-800 font-medium">{day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Coach Information */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Coach Information</Text>
          <View className="flex-row items-center">
            <View className="bg-green-100 w-12 h-12 rounded-full items-center justify-center mr-4">
              <FontAwesome5 name="user-tie" size={20} color="#10B981" />
            </View>
            <View>
              <Text className="text-lg font-semibold">{club.coachName}</Text>
              <Text className="text-gray-600">Head Coach</Text>
            </View>
          </View>
        </View>

        {/* Facilities */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Facilities & Equipment</Text>
          <View className="space-y-2">
            {club.facilities.map((facility, index) => (
              <View key={index} className="flex-row items-center">
                <FontAwesome5 name="check-circle" size={16} color="#10B981" />
                <Text className="text-gray-700 ml-3">{facility}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View className="bg-white rounded-lg p-6 mb-4">
          <Text className="text-xl font-semibold mb-4">Recent Achievements</Text>
          <View className="space-y-3">
            {club.achievements.map((achievement, index) => (
              <View key={index} className="flex-row items-start">
                <FontAwesome5 name="trophy" size={16} color="#F59E0B" className="mt-1" />
                <Text className="text-gray-700 ml-3 flex-1">{achievement}</Text>
              </View>
            ))}
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
          <Text className="text-xl font-semibold mb-4">Parent Reviews</Text>
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