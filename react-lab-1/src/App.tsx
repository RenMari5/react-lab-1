import "./App.css";
import AdDesigner from "./components/adDesigner";
import Header from "./components/header";

function App() {
  return (
    <div className="App font-link">
      <header>
        <Header />
      </header>
      <span>
        <AdDesigner />
      </span>
    </div>
  );
}

export default App;
