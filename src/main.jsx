import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { OverhourSelectorProvider } from "./context/OverhourSelectorContext.jsx";
import { GroupInfoProvider } from "./context/GroupInfoContext.jsx";
import { DateSelectProvider } from "./context/DateSelectContext.jsx";
import { DutySelectProvider } from "./context/DutySelectContext.jsx";
import { OverhourDLCauseProvider } from "./context/OverhourDLCauseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OverhourSelectorProvider>
        <GroupInfoProvider>
          <DateSelectProvider>
            <DutySelectProvider>
              <OverhourDLCauseProvider>
                <App />
              </OverhourDLCauseProvider>
            </DutySelectProvider>
          </DateSelectProvider>
        </GroupInfoProvider>
      </OverhourSelectorProvider>
    </BrowserRouter>
  </StrictMode>
);
