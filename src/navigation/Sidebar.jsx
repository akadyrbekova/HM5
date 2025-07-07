import { Link } from "react-router-dom";
import { BsMenuButtonWide } from "react-icons/bs";
import { BsMenuApp } from "react-icons/bs";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 min-h-screen">
      <nav>
        <ul className="flex flex-col">
          <li>
            <Link
              to="/tool1"
              className="flex items-center px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              <BsMenuButtonWide className="text-xl mr-2 text-blue-700 " />
              <span>Факультет</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tool2"
              className="flex items-center px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              <BsMenuApp className="text-xl mr-2 text-blue-700 " />
              <span> Направление</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
