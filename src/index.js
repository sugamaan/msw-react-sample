// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

enableMocking().then(() => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
