import "./App.css";
import Header from "./Componets/Screens/Includes/Header";
import Places from "./Componets/Screens/Places";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Places />
      </Router>
    </div>
  );
}

export default App;
