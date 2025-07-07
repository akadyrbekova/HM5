import { Link } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 min-h-screen">
      <nav>
        <ul className="flex flex-col">
          <li>
            <Link
              to="/faculty"
              className="flex items-center px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              <DashboardOutlinedIcon className="text-4xl mr-2 text-blue-700" />
              <span>Факультет</span>
            </Link>
          </li>
          <li>
            <Link
              to="/direction"
              className="flex items-center px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              <SpaceDashboardOutlinedIcon className="text-xl mr-2 text-blue-700 " />
              <span> Направление</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
