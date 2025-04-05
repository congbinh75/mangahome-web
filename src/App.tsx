import { Outlet } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;