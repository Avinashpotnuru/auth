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
import Todo from "./components/Todo";

import { Provider } from "react-redux";

import store from "./Store/store";
import CURD from "./components/CURD";
import MoviesDb from "./components/MoviesDb";

export const contextStore = createContext();

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies" element={<MoviesDb />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/crud" element={<CURD />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
