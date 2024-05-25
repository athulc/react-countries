import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      {/* theme={[isDark, setIsDark]} */}
      <Outlet />
      {/* context={[isDark, setIsDark]} */}
    </ThemeProvider>
  );
};

export default App;
