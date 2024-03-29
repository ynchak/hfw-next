import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from '@vercel/analytics/react';
import "@fontsource-variable/inter";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="text-foreground bg-background">
        <App />
        <Analytics />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
