// import { MoralisProvider } from "react-moralis";
import '../public/assets/css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    // <MoralisProvider
    //   appId={process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID}
    //   serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    // >
      <Component {...pageProps} />
    // </MoralisProvider>
  );
}

export default MyApp;