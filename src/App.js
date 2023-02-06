import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={[<Header key={1} />, <Home key={2} />]}
          />

          <Route
            path="/checkout"
            element={[<Header key={3} />, <h1 key={4}>장바구니 페이지!</h1>]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
