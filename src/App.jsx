import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Favorites from "./pages/favorites/Favorites";
import Character from "./pages/character/Character";
import { FavsProvider } from "./context/FavsContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
          <Route index element={
            <FavsProvider>
              <Home />
            </FavsProvider>
          } />
          <Route path="favorites" element={
            <FavsProvider>
              <Favorites />
            </FavsProvider>
          } />
          <Route path="character/:id" element={
            <FavsProvider>
              <Character />
            </FavsProvider>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
