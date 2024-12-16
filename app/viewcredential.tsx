import { createUserWallet } from "../scripts/create-wallet";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import ShareCredential from "./sharecredential"; // Ensure ShareCredential is properly defined

const ViewCredential: React.FC = () => {
  // Retrieve params from the navigation or local search params
  const { createdAt, certificateImageFile } = useLocalSearchParams<{
    createdAt?: string;
    certificateImageFile?: string; // Pass as a stringified URI or object
  }>();


  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.mainTitle}>View Credential</Text>
      <View style={styles.separator} />

      {/* Credential Section */}
      <Text style={styles.title}>MySejahtera Health Credential</Text>
      <Text style={styles.info}>Issued by MyGov</Text>

      {/* Share Button */}
      <Link href="/sharecredential" style={styles.shareButton}>
        <Text style={styles.shareText}>Share Credential</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
  shareButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  shareText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ViewCredential;
