import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { OverhourSelectorProvider } from "./context/OverhourSelectorContext.jsx";
import { GroupInfoProvider } from "./context/GroupInfoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OverhourSelectorProvider>
        <GroupInfoProvider>
          <App />
        </GroupInfoProvider>
      </OverhourSelectorProvider>
    </BrowserRouter>
  </StrictMode>
);
