import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  // Dummy credential data
  const credentials = [
    { id: "1", name: "MyGovID Credential", issuer: "MyGov" },
    { id: "2", name: "Business License", issuer: "Trade Department" },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      {/* My Wallet ID Section */}
      <Text className="text-xl font-bold mb-2">My Wallet ID</Text>
      <Text className="mb-6">Wallet ID: ABCD1234</Text>

      {/* Credentials Section */}
      <Text className="text-xl font-bold mb-2">Credentials</Text>
      {credentials.map((cred) => (
        <View
          key={cred.id}
          className="mb-2 p-4 border border-gray-300 rounded-lg"
        >
          <Text className="text-lg font-semibold">{cred.name}</Text>
          <Text className="text-gray-600">Issued by {cred.issuer}</Text>
        </View>
      ))}

      {/* Existing Navigation Buttons (Optional) */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg mb-4 items-center justify-center"
        onPress={() => navigation.navigate("explore")}
      >
        <Text className="text-white text-lg font-semibold">View My Credentials</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-500 p-4 rounded-lg items-center justify-center"
        onPress={() => navigation.navigate("qrcode")}
      >
        <Text className="text-white text-lg font-semibold">Generate QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
