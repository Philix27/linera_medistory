import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import {
  Chain,
  ThirdwebProvider,
  ChainId,
  coinbaseWallet,
  metamaskWallet,
  safeWallet,
} from "@thirdweb-dev/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Celo, Mumbai, Polygon } from "@thirdweb-dev/chains";
import AppContext from "comp/global/context";

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext>
          <ThirdwebProvider
            activeChain={Celo}
            autoConnectTimeout={5000}
            autoConnect={true}
            // clientId="YOUR_CLIENT_ID"
            theme="dark"
            supportedWallets={[
              metamaskWallet(),
              coinbaseWallet(),
              safeWallet(),
            ]}
          >
            <Component {...pageProps} />
          </ThirdwebProvider>
        </AppContext>
      </PersistGate>
    </ReduxProvider>
  );
}
