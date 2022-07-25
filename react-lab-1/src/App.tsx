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
      <div className="ad-votes-container">
        <div>
          <AdDesigner />
        </div>
        <div>
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
