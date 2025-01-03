import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";
import AllRoutes from "./routes/AllRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </StrictMode>
);
