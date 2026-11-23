import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n";
import "./animations.css";
import "./motion.css";
import "./rtl.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>
);

