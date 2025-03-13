import "./App.css";
import reactLogo from "./assets/react.svg";
import Counter from "./components/counter";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="flex gap-4 mt-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-4">Vite + React</h1>
      <Counter />
      
    </div>
  );
}

export default App;
