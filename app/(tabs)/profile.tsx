import React from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Clipboard from "@react-native-clipboard/clipboard";
import { Copy } from "lucide-react-native";

const ProfileScreen: React.FC = () => {
  const { walletAddress } = useLocalSearchParams<{ walletAddress?: string }>();

  // Function to copy wallet address to clipboard
  const copyToClipboard = () => {
    if (walletAddress) {
      Clipboard.setString(walletAddress);
      // Optional: Add a small feedback mechanism
      if (Platform.OS === 'web') {
        alert('Wallet address copied!');
      } else {
        // For mobile, you might want to use a toast or alert
        alert('Wallet address copied!');
      }
    }
  };

  return (
    <View className="flex-1 bg-white p-4 items-center">
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="w-32 h-32 rounded-full mb-6"
      />

      <Text className="text-lg mb-2">My Wallet Address:</Text>
      
      <View className="flex-row items-center justify-center">
        <Text className="text-gray-600">
          {walletAddress || "Wallet Address Not Available"}
        </Text>
        <TouchableOpacity onPress={copyToClipboard} className="ml-2">
          <Copy color="gray" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;