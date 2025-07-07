import { Routes, Route } from "react-router-dom";
import Faculty from "../pages/Faculty";
import Direction from "../pages/Direction";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/faculty" element={<Faculty />}>
        Факультет
      </Route>
      <Route path="/direction" element={<Direction />}>
        Направление
      </Route>
    </Routes>
  );
};

export default AppRoutes;
