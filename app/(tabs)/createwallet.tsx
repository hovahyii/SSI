import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// Correct the path here
import { createUserWallet } from "../../scripts/create-wallet";  // Use relative path

const CreateWallet: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [ic, setIc] = useState<string>("");

  const handleRegister = async (): Promise<void> => {
    if (!name || !email || !ic) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      const result = await createUserWallet(name, email, ic);
      Alert.alert("Success", `Wallet created successfully: ${JSON.stringify(result)}`);
    } catch (error: any) {
      Alert.alert("Error", `Failed to create wallet: ${error.message}`);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Register</Text>

      {/* Name Input */}
      <Text className="text-lg mb-2">Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 rounded-lg p-4 mb-4"
      />

      {/* Email Input */}
      <Text className="text-lg mb-2">Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border border-gray-300 rounded-lg p-4 mb-4"
      />

      {/* IC Input */}
      <Text className="text-lg mb-2">IC</Text>
      <TextInput
        placeholder="Enter your IC"
        value={ic}
        onChangeText={setIc}
        keyboardType="default"
        className="border border-gray-300 rounded-lg p-4 mb-4"
      />

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg items-center justify-center"
        onPress={handleRegister}
      >
        <Text className="text-white text-lg font-semibold">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateWallet;
