import "./App.css";
import Accordian from "./components/Accordian";
import CallbackExample from "./components/Callback";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import HolyGrail from "./components/HolyGrail";
import MemoExample from "./components/MemoExample";
import ProgressBar from "./components/ProgressBar";
import MemoWithReactMemo from "./components/ReactMemo";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import { useThemeContext, ThemeProvider } from "./components/ThemeContext";

const AppContent = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <div>Current Theme: {theme} </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

function App() {
  return (
    <>
      {/* <MemoExample /> */}
      {/* <MemoWithReactMemo/> */}
      {/* <CallbackExample /> */}
      {/* <ThemeProvider>
        <AppContent />
      </ThemeProvider> */}
      {/* <TemperatureConverter />
      <Counter />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Accordian />
      </div>
      <ContactForm /> */}
      {/* <HolyGrail/> */}
      <ProgressBar/>
    </>
  );
}

export default App;
