import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context/AppProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
 
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
