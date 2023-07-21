import "./App.css";

import { createContext, useState } from "react";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/LogIn";
import Cart from "./components/Cart";

export const store = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <store.Provider value={[count, setCount]}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </store.Provider>
    </div>
  );
}

export default App;
