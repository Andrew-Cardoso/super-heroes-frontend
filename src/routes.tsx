import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";

export const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </RouterRoutes>
  </BrowserRouter>
);
