import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            exact
            path="/"
            element={[<Header key={1} />, <Home key={2} />]}
          />

          <Route
            path="/checkout"
            element={[<Header key={3} />, <Checkout key={4} />]}
          />

          <Route
            path="/payment"
            element={[<Header key={5} />, <Payment key={6} />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
