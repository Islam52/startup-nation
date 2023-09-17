import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { Layout } from "./shared/ui/layout/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
