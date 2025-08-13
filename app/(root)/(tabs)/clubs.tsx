import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';

const Featured = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { isAuthenticated } = useAuth();

  const handleClubPress = (clubId: string) => {
    router.push(`/club/${clubId}`);
  };

  const handleRemoveFavorite = (clubId: string) => {
    removeFromFavorites(clubId);
  };

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text className="text-lg mb-4 text-center">Sign in to view your favorite clubs</Text>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg" onPress={() => router.push('/sign-in')}>
          <Text className="text-white font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <Text className="text-2xl font-bold mb-6 text-center">Favorite Clubs</Text>
      
      <ScrollView className="flex-1">
        {favorites.length > 0 ? (
          favorites.map(club => (
            <View key={club.id} className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
              <View className="flex-row items-start justify-between">
                <TouchableOpacity 
                  className="flex-1"
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
                
                <TouchableOpacity 
                  onPress={() => handleRemoveFavorite(club.id)}
                  className="ml-3 p-2"
                >
                  <FontAwesome5 
                    name="trash" 
                    size={16} 
                    color="#EF4444" 
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <Text className="text-center text-gray-500 mb-4">No favorite clubs yet</Text>
            <Text className="text-center text-gray-400 text-sm">
              Search for clubs and tap the heart icon to save them to your favorites
            </Text>
            <TouchableOpacity 
              className="bg-blue-500 mt-4 py-3 rounded-lg"
              onPress={() => router.push('/(root)/(tabs)/explore')}
            >
              <Text className="text-white text-center font-semibold">Start Searching</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Featured; 