import { fetchCharacters } from "../../../api/routes";
import Image from "next/image";
import charactersImg from "../../../img/characters.png";
import Link from "next/link";


const Characters = async () => {
  const characters = await fetchCharacters();
  console.log(characters);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
      <ul className="flex flex-wrap">
        {characters.map((character) => (
          <li className="w-1/3 p-4">
            <div className="flex flex-col items-center">
              {character.name ? (
                 <Link href={`/${(character.id)}`}>
                <p className="mt-2">{character.name}</p>
                </Link>
              ) : (
                <p>Loading...</p>
              )}
              <Image
                src={charactersImg}
                alt="Imagen Genérica"
                width={300}
                height={300}
              />
              <p>{character.name}</p>
              <p>{character.eye_color}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/">Volver</Link>
    </div>
  );
};

export default Characters;
