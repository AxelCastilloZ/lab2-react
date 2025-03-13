import { useEffect, useState } from "react";

export default function Counter() {
  const favoriteNumber = 7; 
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md w-64 mx-auto mt-10">
      <h1 className="text-2xl font-bold">Contador: {count}</h1>
      {count === favoriteNumber && (
        <p className="text-green-600 font-semibold mt-2">
          ¡Has alcanzado tu número favorito!
        </p>
      )}
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
