import { SWRConfig } from "swr";
import "../styles/globals.css";
import { EmptyLayout } from "../components/layouts";
import { AppPropsWithLayout } from "../models";
import axiosClient from "../apiClient/axiosClient";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
