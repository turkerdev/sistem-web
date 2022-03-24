import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./views/NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import Aka from "./aka/Aka";
import AkaRedirect from "./aka/AkaRedirect";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aka" element={<Aka />} />
          <Route path="/aka/:short" element={<AkaRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
