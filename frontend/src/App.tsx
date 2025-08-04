import { DashBoard } from "./pages/DashBoard";
import { SideBar } from "./components/Layout/SideBar";
import { SideBarProvider } from "./Provider/SideBarProvider";
function App() {

  return (
    <>
      <div className="h-screen bg-white flex overflow-hidden">
        <SideBarProvider>
          <SideBar />
          <DashBoard />
        </SideBarProvider>
      </div>
    </>
  )
}

export default App
