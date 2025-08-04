import { DashBoard } from "./pages/DashBoard";
import { SideBar } from "./components/SideBar";
function App() {

  return (
    <>
      <div className="bg-white">

        <SideBar />
        <DashBoard />
      </div>
    </>
  )
}

export default App
