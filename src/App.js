import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";

const App = () => {
    return (
        <div className="app-entry">
            <Navbar />
            <Cards />
        </div>
    );
};

export default App;
