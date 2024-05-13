"use client";

import { fetchCharacters } from "../../../api/routes";
import { useState, useEffect } from "react";
import Image from "next/image";
import charactersImg from "../../../img/characters.png";
import Link from "next/link";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [eyeColorFilter, setEyeColorFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCharacters();
      setCharacters(data);
    }
    fetchData();
  }, []);

  const filteredCharacters = characters.filter(
    (character) =>
      (!eyeColorFilter || character.eye_color === eyeColorFilter) &&
      (!genderFilter || character.gender === genderFilter)
  );

  return (
    <div className="max-w-3xl mx-auto px-4 m-10">
      <h1 className="text-2xl font-bold text-center mb-4">Personajes</h1>
      <div className="flex justify-center mb-4">
        <div className="flex items-center mr-4">
          <h3 className="mr-2">Color de ojos:</h3>
          <select
            value={eyeColorFilter}
            onChange={(e) => setEyeColorFilter(e.target.value)}
            className="text-black"
          >
            <option value="">Todos</option>
            <option value="blue">Azul</option>
            <option value="yellow">Amarillo</option>
          </select>
        </div>
        <div className="flex items-center">
          <h3 className="mr-2">Género:</h3>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="text-black"
          >
            <option value="">Todos</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
      </div>
      <ul className="flex flex-wrap">
        {filteredCharacters.map((character) => (
          <li key={character.url} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="flex flex-col items-center">
              <Link href={`/characters/${character.url.split("/")[5]}`}>
                <Image
                  src={charactersImg}
                  alt="Imagen Genérica"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="mb-4">
                <p>Nombre: {character.name}</p>
                <p>Color de ojos: {character.eye_color}</p>
                <p>Género: {character.gender}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Characters;
