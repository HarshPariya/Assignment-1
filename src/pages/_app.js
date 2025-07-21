import '../styles/globals.css';
import '../styles/theme.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
