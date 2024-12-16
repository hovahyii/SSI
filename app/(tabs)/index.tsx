import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewCredential from "./../viewcredential";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [walletCreated, setWalletCreated] = useState<boolean>(false);

  // Check wallet validity from AsyncStorage
  useEffect(() => {
    const checkWalletStatus = async () => {
      try {
        const walletStatus = await AsyncStorage.getItem("walletCreated");
        const walletAddress = await AsyncStorage.getItem("walletAddress");
        const name = await AsyncStorage.getItem("name");
        const email = await AsyncStorage.getItem("email");

        // Verify all necessary fields
        if (walletStatus === "true" && walletAddress && name && email) {
          setWalletCreated(true);
        } else {
          // Reset if wallet is invalid
          await AsyncStorage.removeItem("walletCreated");
          setWalletCreated(false);
        }
      } catch (error) {
        console.error("Error checking wallet status:", error);
        setWalletCreated(false);
      }
    };

    checkWalletStatus();
  }, []);

  return (
    <View style={styles.container}>
      {walletCreated ? (
        // Show ViewCredential if wallet exists
        <ViewCredential />
      ) : (
        // Show Create Wallet UI if wallet does not exist
        <>
          <View style={styles.walletContainer}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name="wallet" size={40} color="#007bff" />
            </View>
            <Text style={styles.title}>Create a Wallet</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await AsyncStorage.setItem("walletCreated", "true");
              router.push("/createwallet");
            }}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  walletContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#3b82f6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
    color: "#3b82f6",
  },
  button: {
    backgroundColor: "#3b82f6",
    borderWidth: 2,
    borderColor: "#1d4ed8",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
