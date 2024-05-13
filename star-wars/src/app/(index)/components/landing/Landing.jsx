import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">¡Star Wars!</h1>
      <div className="space-y-4 my-4">
        <Link href="/movies">
          <button className="m-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Ver películas
          </button>
        </Link>
        <Link href="/characters">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Ver personajes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
