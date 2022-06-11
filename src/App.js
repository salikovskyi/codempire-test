import "./App.css";
import Header from "./components/Header/Header";
import CountryList from "./components/CountryList/CountryList";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleNameChange = (name) => {
    setName(name);
  };

  return (
    <div>
      <Header onChange={handleNameChange} />
      <CountryList name={name} />
    </div>
  );
}

export default App;
