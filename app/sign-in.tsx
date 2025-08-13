import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from './context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      router.replace('/(root)/(tabs)');
    } catch (e: any) {
      alert(e.message || 'Failed to sign in');
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-20">
        {/* Back Button */}
        <TouchableOpacity 
          className="mb-6"
          onPress={() => router.back()}
        >
          <View className="flex-row items-center">
            <FontAwesome5 name="arrow-left" size={16} color="#3B82F6" />
            <Text className="text-blue-500 ml-2 font-medium">Back</Text>
          </View>
        </TouchableOpacity>

        <Text className="text-3xl font-bold text-center mb-8">Welcome Back</Text>
        
        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Email</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg bg-white"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2 font-medium">Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg bg-white"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            className="bg-blue-500 py-4 rounded-lg mt-6"
            onPress={handleSignIn}
            disabled={loading}
          >
            <Text className="text-white text-center font-semibold text-lg">{loading ? 'Signing In...' : 'Sign In'}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="mt-4"
            onPress={() => router.push('/sign-up')}
          >
            <Text className="text-blue-500 text-center">Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}