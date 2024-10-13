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
import { OverhourJustificationProvider } from "./context/OverhourJustificationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OverhourSelectorProvider>
        <GroupInfoProvider>
          <DateSelectProvider>
            <DutySelectProvider>
              <OverhourJustificationProvider>
                {/* si va todo bien borrar los 3 de abajo hasta app */}
                <OverhourDLCauseProvider>
                  <App />
                </OverhourDLCauseProvider>
              </OverhourJustificationProvider>
            </DutySelectProvider>
          </DateSelectProvider>
        </GroupInfoProvider>
      </OverhourSelectorProvider>
    </BrowserRouter>
  </StrictMode>
);
