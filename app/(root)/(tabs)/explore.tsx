import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import { Club, mockClubs } from '../../data/mockClubs';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Club[]>([]);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = mockClubs.filter(club => 
      club.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.zipCode.includes(searchQuery) ||
      club.sport.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const handleClubPress = (clubId: string) => {
    router.push(`/club/${clubId}`);
  };

  const handleFavoritePress = (club: Club) => {
    toggleFavorite(club);
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <Text className="text-2xl font-bold mb-8 text-center">Find Sports Clubs</Text>
      
      {/* Search Input */}
      <View className="mb-8">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Enter city, zip code, or sport..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity 
          className="bg-blue-500 mt-4 py-3 rounded-lg"
          onPress={handleSearch}
        >
          <Text className="text-white text-center font-semibold text-lg">Search</Text>
        </TouchableOpacity>
      </View>

      {/* Search Results */}
      <ScrollView className="flex-1">
        {searchResults.length > 0 ? (
          searchResults.map(club => (
            <View key={club.id} className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-start justify-between">
                <TouchableOpacity 
                  className="flex-1"
                  onPress={() => handleClubPress(club.id)}
                >
                  <Text className="text-lg font-semibold">{club.name}</Text>
                  <Text className="text-gray-600">{club.sport} • {club.city}</Text>
                  <Text className="text-gray-500">{club.ageRange} • {club.competitiveLevel}</Text>
                  <Text className="text-gray-500">{club.fees}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  onPress={() => handleFavoritePress(club)}
                  className="ml-3 p-2"
                >
                  <FontAwesome5 
                    name={isFavorite(club.id) ? "heart" : "heart"} 
                    size={20} 
                    color={isFavorite(club.id) ? "#EF4444" : "#D1D5DB"} 
                    solid={isFavorite(club.id)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : searchQuery ? (
          <Text className="text-center text-gray-500 mt-8">No clubs found. Try a different search.</Text>
        ) : (
          <Text className="text-center text-gray-500 mt-8">Enter a location or sport to search for clubs.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Explore;