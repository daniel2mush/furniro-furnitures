import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { cardColor, primaryColor, secondaryColor } from "./Utils/Colors";
import type { ReactNode } from "react";
import Renderer from "./components/Renderer";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

interface RoutesTypes {
  path: string;
  element: ReactNode;
}

const routes: RoutesTypes[] = [
  {
    path: "/",
    element: (
      <Renderer>
        <Home />
      </Renderer>
    ),
  },
  {
    path: "/shop",
    element: (
      <Renderer>
        <Shop />
      </Renderer>
    ),
  },
  {
    path: "/about",
    element: (
      <Renderer>
        <About />
      </Renderer>
    ),
  },
  {
    path: "/contact",
    element: (
      <Renderer>
        <Contact />
      </Renderer>
    ),
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
