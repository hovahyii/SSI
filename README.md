# SSI React Native App

This is a React Native application built with Expo that demonstrates a Self-Sovereign Identity (SSI) wallet, allowing users to securely manage and display their credentials directly on their devices. It emphasizes user-centric control of personal information, minimalistic design, and secure access through integrated QR code scanning.

## Key Features

- **Self-Sovereign Identity (SSI) Focus:**  
  Users maintain complete control over their credentials and identity attributes, storing them locally without relying on centralized servers.

- **Credentials Management:**  
  The home page displays a "My Wallet ID" section and a list of dummy credentials, showing how one can present, manage, and organize various verified pieces of information (e.g., IDs, licenses).

- **QR Code Integration:**  
  The built-in QR scanner screen provides a frictionless way to verify or share credentials. It can be integrated with verification endpoints or other SSI-compatible services.

- **Modern UI & UX:**  
  The app features a clean, minimalistic interface. Bottom tab navigation provides quick access to Home, QR Scanner, and Profile screens. The UI is styled using [NativeWind](https://nativewind.dev), enabling Tailwind CSS-like styling within React Native.

- **Customizable & Extensible:**  
  The codebase is structured so you can easily add new credential types, integrate cryptographic verifications, or link to backend SSI ecosystems.

## Technology Stack

- **React Native**: Core framework for building native mobile apps using JavaScript/TypeScript.
- **Expo**: Development platform that simplifies building, testing, and deploying React Native apps.
- **Expo Router**: File-based routing for seamless navigation handling.
- **NativeWind**: Utility-first styling solution inspired by Tailwind CSS, for rapid UI development.
- **Expo Barcode Scanner (optional)**: For QR code scanning functionality.
- **React Navigation**: Provides native stack and tab navigation patterns.

## Prerequisites

- **Node.js** (LTS version recommended)
- **pnpm** or **npm** package manager
- **Expo CLI**:
  ```bash
  npm install --global expo-cli
  ```
- **Android/iOS Simulator** or a physical device with USB debugging enabled

## Installation & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ssi-react-native-app.git
   cd ssi-react-native-app
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the Development Server**:
   ```bash
   expo start
   ```

4. **Run on Android or iOS**:
   - Press `a` in the terminal to run on Android emulator.
   - Press `i` in the terminal to run on iOS simulator (macOS only).
   - Or scan the QR code with the Expo Go app on your device.

## Project Structure

```
app/
  ├─ _layout.tsx              # Root layout and navigation container
  ├─ (tabs)/
  │   ├─ _layout.tsx          # Bottom tab navigation layout
  │   ├─ index.tsx            # Home screen (credentials display, wallet ID)
  │   ├─ qrcode.tsx           # QR scanner screen
  │   ├─ profile.tsx          # Profile screen (user info)
  ├─ +not-found.tsx           # Catch-all route for undefined pages
assets/
  ├─ fonts/                   # Custom fonts
  ├─ images/                  # App images and logo
```

## Customization

- **Styling**:  
  Modify `className` values throughout the screens to adjust colors, spacing, and layout.  
  Tailwind-like classes come from NativeWind, and can be adjusted in the `tailwind.config.js` file.

- **Credentials & SSI Integration**:  
  Dummy credentials can be replaced or extended by pulling real data from decentralized identity systems or secure storage solutions. Consider integrating standards like DIDComm or linking to cryptographic libraries to verify credentials.

- **QR Code Functionality**:  
  Enhance the QR scanner to decode and act on SSI-specific payloads. For example, scan a QR code to retrieve a verifiable credential or present one to a verifier.

## Troubleshooting

- **Metro Bundler Errors**:  
  If you encounter module resolution errors, run:
  ```bash
  expo start -c
  ```
  to clear the cache.

- **Dependency Warnings**:  
  Upgrade packages to their latest versions if you see deprecation warnings.

## Contributing

We welcome contributions!  
- Fork the repository
- Create a feature branch
- Commit your changes  
- Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

