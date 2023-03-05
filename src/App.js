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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";

const promise = loadStripe(
  "pk_test_51Mdm8vLkCWpOvKupwhjQvaPGtsraLg5EM3b9Iuvc2uVSY84Dk3R462YANjT3vc1Sweobr7SZYvvAQcGkgBunvqle00eA9pIGac"
);

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
          <Route path="/login" element={<Login key={20} />} />

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
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment key={5} />
                </Elements>
              </>
            }
          />

          <Route
            path="/order"
            element={
              <>
                <Header />
                <Order key={10} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
