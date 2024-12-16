import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Linking,
} from "react-native";
import { Link, Stack } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const isPermissionGranted = Boolean(permission?.granted);

  // Function to handle QR code scanning
  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (!scannedData) {
      setScannedData(data);
      console.log("Scanned Data:", data);
      Linking.openURL(data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      <Text style={styles.title}>QR Code Scanner</Text>

      {/* Permission Request */}
      {!isPermissionGranted ? (
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>
            Camera access is required to scan QR codes.
          </Text>
          <Pressable onPress={requestPermission} style={styles.permissionButton}>
            <Text style={styles.buttonText}>Grant Permission</Text>
          </Pressable>
        </View>
      ) : (
        <>
          {/* Camera View */}
          <CameraView
            style={styles.camera}
            facing="back" // Use back camera
            onBarcodeScanned={handleBarcodeScanned}
          />

          {/* Scanning Controls */}
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setIsScanning(true)}
              disabled={!isPermissionGranted}
            >
              <Text
                style={[
                  styles.scanButton,
                  { opacity: !isPermissionGranted ? 0.5 : 1 },
                ]}
              >
                {scannedData ? "Scanned!" : "Start Scanning"}
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-around",
    paddingVertical: 80,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  permissionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  permissionButton: {
    backgroundColor: "#0E7AFE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  scanButton: {
    color: "#0E7AFE",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
