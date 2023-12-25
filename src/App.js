import "./App.css";

import { createContext } from "react";
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

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import store from "./Store/store";

import MoviesDb from "./components/MoviesDb";
import CRUD from "./components/CRUD";
import Fetching from "./components/Fetching";

export const contextStore = createContext();
const queryClient = new QueryClient();
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/movies" element={<MoviesDb />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/crud" element={<CRUD />} />
              <Route path="/fetching" element={<Fetching />} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
