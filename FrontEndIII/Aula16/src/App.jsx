import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {
  return (
   <div>
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1> 
      <Navbar />
      <Outlet />
   </div>
  )
}

export default App