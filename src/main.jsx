import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { About } from "./About";
import { Creation } from "./Creation";
import { Footer } from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Menu />
    <About />
    <Creation />
    <Footer />
  </React.StrictMode>
);


