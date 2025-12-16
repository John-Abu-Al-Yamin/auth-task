import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import TaxFormPage from "./TaxFormPage";
import AppFrom from "./AppFrom.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Approuter/Approuter.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
    <Toaster position="top-center" />
  </StrictMode>
);
