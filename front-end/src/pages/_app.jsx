import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>App de eventos.</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
};

export default App;