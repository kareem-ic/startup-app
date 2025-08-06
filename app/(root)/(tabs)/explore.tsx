import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Club, mockClubs } from '../../data/mockClubs';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Club[]>([]);

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

  return (
    <View style={{ flex: 1, padding: 70 }}>
      <Text className="text-3xl font-bold mb-6 text-center">Find Sports Clubs</Text>
      
      {/* Search Input */}
      <View className="mb-6">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Enter city, zip code, or sport..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity 
          className="bg-blue-500 mt-3 py-3 rounded-lg"
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
              <Text className="text-lg font-semibold">{club.name}</Text>
              <Text className="text-gray-600">{club.sport} • {club.city}</Text>
              <Text className="text-gray-500">{club.ageRange} • {club.competitiveLevel}</Text>
              <Text className="text-gray-500">{club.fees}</Text>
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