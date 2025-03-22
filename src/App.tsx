import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Popup from "./components/Popup";

function App() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div>
        {popup ? (
          <div className="fixed top-0 left-0 z-10  w-screen h-screen bg-[#FFFFFF]">
            <Popup setPopup={setPopup} />
          </div>
        ) : (
          <div>
            <Header setPopup={setPopup} />
            <Main />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
