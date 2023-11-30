import { useState } from "react";
import Dashboard from "./components/Dashboard"
import SideBar from "./components/SideBar";
import { Outlet } from 'react-router-dom'
const App = () => {

  const [hidePanel, setHidePanel] = useState(false)
  const handleSidePanel = () => {
    setHidePanel(prev => !prev)
  }

  return (
    <div className={hidePanel ? "flex " : "flex "}>
      <div className={hidePanel ? "hidden h-[100vh] border transform duration-300 ease-in-out" : " basis-[100%] md:basis-[12%] h-[100vh] border transform duration-300 ease-in-out"}>
        <SideBar onHandle={handleSidePanel} />
      </div>
      <div className={hidePanel ? "basis-[100%] overflow-x-hidden md:basis-[100%] border bg-[#f5f5f5]" : "hidden md:inline-block md:basis-[88%] border bg-[#f5f5f5] transform duration-300 ease-in-out"}>
        <Dashboard onHandle={handleSidePanel} />
        <Outlet />
      </div>
    </div>
  )
}

export default App