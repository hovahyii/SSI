import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View className="flex-1 bg-white items-center justify-center p-4">
      {/* Title */}
      <Text className="text-2xl font-bold mb-6">Create a Wallet</Text>

      {/* Start Button */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={() => navigation.navigate("createwallet")} // Navigate to CreateWallet screen
      >
        <Text className="text-white text-lg font-semibold">Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
