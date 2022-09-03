import React from "react";
import CartContainer from "./Cart/CartContainer";
import { useGlobalContext } from "./Functions/Context";

import Navbar from "./Pages/Navbar";

// components

// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
