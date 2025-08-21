import { DashBoard } from "./pages/DashBoard";
import { SideBar } from "./components/Layout/SideBar";
import { SideBarProvider } from "./Provider/SideBarProvider";
import { Routes, Route } from "react-router-dom";
import { Teachers } from "./pages/Teachers";
import { Students } from "./pages/Students";
import { Schedule } from "./pages/Schedule";
import { Results } from "./pages/Results";
import { Courses } from "./pages/Courses";
function App() {

  return (
    <>
      <div className="h-screen bg-white flex overflow-hidden">
        <SideBarProvider>
          <SideBar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/results" element={<Results />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </SideBarProvider>
      </div>
    </>
  )
}

export default App
