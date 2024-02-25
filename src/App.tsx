import "./App.css";
import Home from "./views/home";
import { DataProvider } from "./context/widgetContext";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
