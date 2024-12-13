const QRCode = require('qrcode');

// Function to generate QR code
const generateQRCode = async (passkey) => {
  try {
    const qrData = `https://your-app-url.com/access?passkey=${passkey}`;
    const qrCodeURL = await QRCode.toDataURL(qrData); // Generates a Base64-encoded QR code image
    console.log('Generated QR Code:', qrCodeURL);
    return qrCodeURL; // Use this URL to display the QR code in your app or send it to users
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
};

// Example usage
const passkey = '12345ABCDEF'; // Your secure passkey
generateQRCode(passkey);
