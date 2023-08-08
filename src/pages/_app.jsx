import { AuthProvider } from "@/context/AuthContext";
import { DevLinkProvider } from "@/devlink";
import "@/devlink/global.css";

function App({ Component, pageProps }) {
  return (
    <div>
      {/* Wrap the entire application with DevLinkProvider */}
      <DevLinkProvider>
        {/* Wrap the application content with AuthProvider */}
        <AuthProvider>
          {/* Render the main component with its props */}
          <Component {...pageProps} />
        </AuthProvider>
      </DevLinkProvider>
    </div>
  );
}

export default App;
