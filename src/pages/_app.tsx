import Inspect from "inspx";
import { ThemeProvider } from "next-themes";
import { Header } from "~/components";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import "~/styles/center-vertically.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Inspect>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Inspect>
  );
};

export default MyApp;
