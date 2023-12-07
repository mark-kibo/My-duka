import { Outlet } from "react-router-dom";
import DashBoardOverView from "./components/DashBoard/DashBoardOverView";
import Sidebar from "./components/Sidebar";
import SwipeableTemporaryDrawer from "./components/swipeabledrawer";
import Navbar from "./components/Navbar";
;

function App() {
  return (
  

    <div className="w-full border overflow-y-auto max-h-screen">
      <SwipeableTemporaryDrawer/>
      <Navbar />
      <div className="py-4">
        <Outlet />
      </div>


    </div>


  );
}

export default App;