import "../styles/globals.css";
import "../styles/home.css";
import "../styles/galeri.css";
import "../styles/navbar.css";
import "../styles/kontak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
