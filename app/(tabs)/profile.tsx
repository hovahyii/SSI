import React from "react";
import { View, Text, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white p-4 items-center">
      {/* User Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="w-32 h-32 rounded-full mb-6"
      />

      {/* User Info */}
      <Text className="text-xl font-bold">John Doe</Text>
      <Text className="text-gray-500 mb-6">johndoe@example.com</Text>

      {/* Additional Info */}
      <Text className="text-lg">Account Information</Text>
      {/* Add more details or features as needed */}
    </View>
  );
};

export default ProfileScreen;
