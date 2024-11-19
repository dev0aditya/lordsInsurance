import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
