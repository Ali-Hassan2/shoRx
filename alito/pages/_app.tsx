import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          backgroundColor: "transparent !important",
        }}
        toastOptions={{
          style: {
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
          },
        }}
      />
    </>
  );
}
