import { ToastContainer } from "react-toastify";
import "./App.css"

import Home from "./pages/Home"

function App() {
  
  
  return (
    <>
      <ToastContainer position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
      <Home/>
    </>
  )
}

export default App



