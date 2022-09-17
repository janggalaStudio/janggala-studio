import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
  // return <Component {...pageProps} />
}

export default MyApp;
