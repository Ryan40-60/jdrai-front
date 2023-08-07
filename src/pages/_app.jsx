import "@/devlink/global.css"
import { AuthProvider } from "@/context/AuthContext";
import { DevLinkProvider } from "@/devlink";

function App({ Component, pageProps }) {
  return (
    <div>
      <DevLinkProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </DevLinkProvider>
    </div>
  );
}
export default App;
