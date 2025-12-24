import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen duration-300">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
