"use client";

import { fetchCharacters } from "../../../api/routes";
import { useState, useEffect } from "react";
import Image from "next/image";
import charactersImg from "../../../img/characters.png";
import Link from "next/link";

const Characters = async () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [eyeColorFilter, setEyeColorFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCharacters();
      setCharacters(data);
      setFilteredCharacters(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [eyeColorFilter, genderFilter]);

  const filterCharacters = () => {
    let filtered = characters;

    if (eyeColorFilter) {
      filtered = filtered.filter(
        (character) => character.eye_color === eyeColorFilter
      );
    }

    if (genderFilter) {
      filtered = filtered.filter(
        (character) => character.gender === genderFilter
      );
    }

    setFilteredCharacters(filtered);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
      <div>
        <h3>Filtrar por:</h3>
        <label>
          Color de ojos:
          <select
            value={eyeColorFilter}
            onChange={(e) => setEyeColorFilter(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="blue">Azul</option>
            <option value="yellow">Amarillo</option>
          </select>
        </label>
        <br />
        <label>
          Género:
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </label>
      </div>
      <ul className="flex flex-wrap">
        {filteredCharacters.map((character) => (
          <li key={character.url} className="w-1/3 p-4">
            <div className="flex flex-col items-center">
              <Link href={`/characters/${character.url.split("/")[5]}`}>
                <p className="mt-2">{character.name}</p>
              </Link>
              <Image
                src={charactersImg}
                alt="Imagen Genérica"
                width={300}
                height={300}
              />
              <p>{character.eye_color}</p>
              <p>{character.gender}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/">Volver</Link>
    </div>
  );
};

export default Characters;
