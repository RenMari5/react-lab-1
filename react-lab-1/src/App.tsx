import "./App.css";
import AdDesigner from "./components/adDesigner";
import Header from "./components/header";
import Votes from "./components/votes";

function App() {
  return (
    <div className="App font-link">
      <header>
        <Header />
      </header>
      <span>
        <AdDesigner />
      </span>
      <span>
        <Votes />
      </span>
    </div>
  );
}

export default App;
