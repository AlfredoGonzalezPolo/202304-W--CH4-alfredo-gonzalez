// import { useState } from "react";
import { Info } from "../info/Info";
import { Keyboard } from "../keyboard/Keyboard";
function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
        </main>
      </div>
    </>
  );
}

export default App;
