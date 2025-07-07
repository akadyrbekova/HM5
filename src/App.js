import Aside from "./component/side/Aside";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-100">
        <Aside />
      </div>
      <div className="w-3/4 p-4">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
