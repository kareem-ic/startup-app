import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';
import { mockClubs } from '../../data/mockClubs';

const Featured = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isAuthenticated } = useAuth();

  // Get featured clubs (first 4 for demo, in real app this would be trending/popular)
  const featuredClubs = mockClubs.slice(0, 4);

  const handleClubPress = (clubId: string) => {
    router.push(`/club/${clubId}`);
  };

  const handleFavoritePress = (club: any) => {
    if (!isAuthenticated) {
      router.push('/sign-in');
      return;
    }
    toggleFavorite(club);
  };

  const getTrendingIcon = (index: number) => {
    if (index === 0) return "fire";
    if (index === 1) return "star";
    if (index === 2) return "bolt";
    return "heart";
  };

  const getTrendingColor = (index: number) => {
    if (index === 0) return "#F59E0B"; // Amber
    if (index === 1) return "#10B981"; // Green
    if (index === 2) return "#3B82F6"; // Blue
    return "#EF4444"; // Red
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <Text className="text-2xl font-bold mb-6 text-center">Featured Clubs</Text>
      
      {/* Featured Header */}
      <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6">
        <View className="flex-row items-center mb-3">
          <FontAwesome5 name="crown" size={24} color="white" />
          <Text className="text-white text-xl font-bold ml-3">Trending This Week</Text>
        </View>
        <Text className="text-blue-100 text-base">
          Discover the most popular youth sports programs in your area
        </Text>
      </View>

      <ScrollView className="flex-1">
        {featuredClubs.map((club, index) => (
          <View key={club.id} className="bg-white rounded-lg mb-4 border border-gray-200 shadow-sm">
            {/* Featured Badge */}
            <View className="bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-br-lg absolute top-0 right-0 z-10">
              <Text className="text-white text-xs font-bold">FEATURED</Text>
            </View>

            <TouchableOpacity
              className="p-4"
              onPress={() => handleClubPress(club.id)}
            >
              {/* Club Header */}
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1 pr-4">
                  <View className="flex-row items-center mb-2">
                    <FontAwesome5 
                      name={getTrendingIcon(index)} 
                      size={16} 
                      color={getTrendingColor(index)} 
                    />
                    <Text className="text-gray-500 text-sm ml-2 capitalize">
                      #{index + 1} Trending
                    </Text>
                  </View>
                  <Text className="text-lg font-bold text-gray-900">{club.name}</Text>
                  <Text className="text-blue-600 font-semibold">{club.sport}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleFavoritePress(club)}
                  className="p-2"
                >
                  <FontAwesome5
                    name={isFavorite(club.id) ? "heart" : "heart"}
                    size={20}
                    color={isFavorite(club.id) ? "#EF4444" : "#D1D5DB"}
                    solid={isFavorite(club.id)}
                  />
                </TouchableOpacity>
              </View>

              {/* Club Details */}
              <View className="space-y-2">
                <View className="flex-row items-center">
                  <FontAwesome5 name="map-marker-alt" size={14} color="#6B7280" />
                  <Text className="text-gray-600 ml-2">{club.city}, {club.zipCode}</Text>
                </View>
                <View className="flex-row items-center">
                  <FontAwesome5 name="users" size={14} color="#6B7280" />
                  <Text className="text-gray-600 ml-2">{club.ageRange}</Text>
                </View>
                <View className="flex-row items-center">
                  <FontAwesome5 name="trophy" size={14} color="#6B7280" />
                  <Text className="text-gray-600 ml-2 capitalize">{club.competitiveLevel}</Text>
                </View>
                <View className="flex-row items-center">
                  <FontAwesome5 name="dollar-sign" size={14} color="#6B7280" />
                  <Text className="text-gray-600 ml-2">{club.fees}</Text>
                </View>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                className="bg-blue-500 py-3 rounded-lg mt-4"
                onPress={() => handleClubPress(club.id)}
              >
                <Text className="text-white text-center font-semibold">Learn More</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}

        {/* Call to Action */}
        <View className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
          <Text className="text-center text-gray-700 mb-3">
            Want to see more clubs?
          </Text>
          <TouchableOpacity
            className="bg-green-500 py-3 rounded-lg"
            onPress={() => router.push('/(root)/(tabs)/explore')}
          >
            <Text className="text-white text-center font-semibold">Search All Clubs</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Featured; 