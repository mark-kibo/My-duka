import { Outlet } from "react-router-dom";
import DashBoardOverView from "./components/DashBoard/DashBoardOverView";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="basis-[12%] border overflow-hidden">
        <Sidebar/>

      </div>


      <div className="basis-[88%] border overflow-y-auto">
        <DashBoardOverView/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
