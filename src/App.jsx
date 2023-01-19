import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ContactPage from "./ContactPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ContactPage />
    </div>
  );
}

export default App;
