import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <Link to="/tool1">Факультет</Link>
          <Link to="/tool2">Направление</Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
