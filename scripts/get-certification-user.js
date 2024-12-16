// Import fetch if running in a Node.js environment
//const fetch = require('node-fetch');

const { useSyncExternalStore } = require("react");

// Define the API endpoint and headers
const API_URL = "https://service-testnet.maschain.com/api/certificate/get-certificate";
const HEADERS = {
    "client_id": "64b1daf1503a42970c2c19446e253076797266742a55724573ace99627ae6638", // verifier api
    "client_secret": "sk_7c8e7a155cd441dcc7e516ae9a4c6ecbc2002961a1855d118b6fdf447445077c", // verifier api
    "content-type": "application/json"
};



// Function to get the certificate from the organisation
export const getCertificateUser = async (qrCodeData) => {
    try {
        // Parse QR code data to extract wallet address
        const parsedData = parseQRData(qrCodeData);
        
        // Check if wallet address is found
        if (!parsedData.walletAddress) {
            throw new Error("No wallet address found in QR code");
        }

        // Define query parameters with dynamically extracted wallet address
        const params = {
            from: parsedData.walletAddress,  // Dynamically set from QR code
            to: "0x60C7Ff7B9419d01e0720A34D75dD7b30C90F8830",  // user wallet address
            contract_address: "0x47Ac6452bA845346Fb8ac289BD44f3e74942cbc6", // contract address = certificate address
            tx_id: "0x5c5bef7dab39dd33ec84b1f8845379b95ccbf8199cdb41298d9d654bf6c2e65d", // transaction hash
            status: "success" // Default value
        };

        // Make the GET request with query parameters
        const url = new URL(API_URL);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        const response = await fetch(url, {
            method: "GET",
            headers: HEADERS
        });

        // Check if the response is ok (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const result = await response.json();
        console.log("Certificate Response:", result);

        // Extract attributes from the first item in the result array
        const certificateData = result.result[0];
        
        // Store attributes in variables
        const fromWallet = certificateData.from_wallet;
        const toWallet = certificateData.to_wallet;
        const transactionHash = certificateData.transactionHash;
        const certificateImageFile = certificateData.certificate_image_file;
        const certificateFile = certificateData.certificate_file;
        const createdAt = certificateData.created_at;
        
        const qrCodeData = await ViewCredential(result);
        return {fromWallet,toWallet,transactionHash,certificateImageFile,certificateFile,createdAt};
    } catch (error) {
        console.error("Error fetching certificate:", error.message);
        throw error;
    }
};


