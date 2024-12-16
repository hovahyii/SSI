import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = () => {
  const passkey = '12345ABCDEF'; // Passkey to include in QR code
  const qrData = `https://your-app-url.com/access?passkey=${passkey}`; // Embed passkey in a URL or as plain data

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan this QR Code</Text>
      <QRCode value={qrData} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default QRCodeGenerator;
