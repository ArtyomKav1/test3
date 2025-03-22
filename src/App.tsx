import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Popap from "./components/Popap"

function App() {
  const [popap, setPopap] = useState(false)
  return (
    <>
      <div >
        {
          popap
            ? 
            <div className="fixed top-0 left-0 z-10  w-screen h-screenv bg-[#FFFFFF]">
              <Popap setPopap={setPopap} />
            </div>
            :
            <div>
              <Header setPopap={setPopap} />
              <Main />
              <Footer />
            </div>
        }
      </div>
    </>
  )
}

export default App
