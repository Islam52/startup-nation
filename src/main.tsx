import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { Layout } from "./shared/ui/layout/Layout.tsx";
import "./styles/global.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
