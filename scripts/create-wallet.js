// scripts/create-wallet.js

export const createUserWallet = async (name, email, ic) => {
    const url = "https://service-testnet.maschain.com/api/wallet/create-user";
    const headers = {
      "client_id": "b0d3f7dc44df9a7514c511b8bd5323c202dd662e038436714f51845541ed9c79",
      "client_secret": "sk_d4bd460d0196b1271fbe67b4568aab21d018cea95133fb831363b0076c792faa",
      "content-type": "application/json",
    };
  
    const body = { name, email, ic };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("API Response:", result);
      return result; // Return the result for further use
    } catch (error) {
      console.error("Error creating user wallet:", error);
      throw error; // Propagate the error for the caller to handle
    }
  };
  