import { DashBoard } from "./pages/DashBoard";
import { SideBar } from "./components/SideBar";
import { SideBarProvider } from "./Provider/SideBarProvider";
function App() {

  return (
    <>
      <div className="bg-white flex">
        <SideBarProvider>
          <SideBar />
          <DashBoard />
        </SideBarProvider>
      </div>
    </>
  )
}

export default App
