import { createUserWallet } from "@/scripts/create-wallet";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import ShareCredential from "./sharecredential"; // Ensure ShareCredential is properly defined

const ViewCredential: React.FC = () => {
  // Retrieve params from the navigation or local search params
  const { createdAt, certificateImageFile } = useLocalSearchParams<{
    createdAt?: string;
    certificateImageFile?: string; // Pass as a stringified URI or object
  }>();

  // Parse the image source if provided
  const parsedCertificateImageFile: ImageSourcePropType | null =
    certificateImageFile
      ? { uri: certificateImageFile } // Assuming it's passed as a URI
      : null;

  return (
    <View style={styles.container}>
      

      {/* Render Image */}
      {parsedCertificateImageFile ? (
        <Image source={parsedCertificateImageFile} style={styles.image} />
      ) : (
        <Text style={styles.noImageText}>No Image Available</Text>
      )}

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={ShareCredential}>
      <Text style={styles.title}>Credential</Text>
      <Text style={styles.info}>Issued by MyGov</Text>
      <Text style={styles.info}>Created At: {createdAt}</Text>
        <Text style={styles.shareText} onPress={ShareCredential}>Share Credential</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  noImageText: {
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
  shareButton: {
    marginTop: 20,
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
