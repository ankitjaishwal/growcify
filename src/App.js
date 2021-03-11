import "./App.css";
import List from "./Components/List.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <List />
      </div>
    </BrowserRouter>
  );
}

export default App;
