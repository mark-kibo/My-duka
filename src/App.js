import { Outlet } from "react-router-dom";
import DashBoardOverView from "./components/DashBoard/DashBoardOverView";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/Signup";
import UserTable from "./components/UserTable";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="flex overflow-y-hidden">
      {/* Sidebar */}
      <div className="basis-[12%] border overflow-hidden bg-blue-600">
        <Sidebar />
      </div>

      {/* Dashboard */}
      <div className="basis-[88%] border overflow-y-auto max-h-screen">
        <DashBoardOverView />
        <div>
          <Outlet />
        </div>
        
        
        
      </div>
     
    </div>
  );
}

export default App;