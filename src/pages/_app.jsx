import { AuthProvider } from "@/context/AuthContext";

function App({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}
export default App;
