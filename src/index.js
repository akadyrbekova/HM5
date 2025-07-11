import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/main.css";
import { ModalProvider } from "./context/ModalContext";
import { AddProvider } from "./context/AddContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalProvider>
      <AddProvider>
        <App />
      </AddProvider>
    </ModalProvider>
  </BrowserRouter>
);
