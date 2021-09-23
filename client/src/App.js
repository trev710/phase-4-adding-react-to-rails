import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Show me Some MONKE Magic!</h1>;
}

export default App;
