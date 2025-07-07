import "./App.css";
import CallbackExample from "./components/Callback";
import MemoExample from "./components/MemoExample";
import MemoWithReactMemo from "./components/ReactMemo";
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
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  );
}

export default App;
