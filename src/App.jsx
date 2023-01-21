import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/SearchDiv/Search";
function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />

      <Footer />
    </div>
  );
}

export default App;
