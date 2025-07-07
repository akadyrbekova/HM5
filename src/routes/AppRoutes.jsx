import { Routes, Route } from "react-router-dom";
import Faculty from "../pages/Faculty";
import Direction from "../pages/Direction";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/tool1" element={<Faculty />}>
        Факультет
      </Route>
      <Route path="/tool2" element={<Direction />}>
        Направление
      </Route>
    </Routes>
  );
};

export default AppRoutes;
