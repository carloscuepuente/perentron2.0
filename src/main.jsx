import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { OverhourSelectorProvider } from "./context/OverhourSelectorContext.jsx";
import { GroupInfoProvider } from "./context/GroupInfoContext.jsx";
import { DateSelectProvider } from "./context/DateSelectContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OverhourSelectorProvider>
        <GroupInfoProvider>
          <DateSelectProvider>
            <App />
          </DateSelectProvider>
        </GroupInfoProvider>
      </OverhourSelectorProvider>
    </BrowserRouter>
  </StrictMode>
);
