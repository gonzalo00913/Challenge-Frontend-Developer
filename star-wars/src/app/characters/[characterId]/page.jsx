import { fetchCharacterDetails } from "../../api/routes";
import Image from "next/image";
import charactersImg from "../../img/characters.png";
import Link from "next/link";

export default async function CharactersDetailPage({ params }) {
  const { characterId } = params;
  const characterDetail = await fetchCharacterDetails(characterId);

  const { name, eye_color, gender, height, birth_year, skin_color, mass } = characterDetail;

  return (
    <div className="max-w-3xl mx-auto px-4 m-10">
      <h1 className="text-2xl font-bold text-center mb-4">Detalles del Personaje</h1>
      <div className="flex flex-col items-center">
        <h2 className="mb-2">Name: {name}</h2>
        <Image src={charactersImg} alt="Imagen Genérica" width={300} height={300} />
        <p>Eye color: {eye_color}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth year: {birth_year}</p>
        <p>Skin color: {skin_color}</p>
        <p>Mass: {mass}</p>
      </div>
      <div className="text-center mt-4">
        <Link href="/characters">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
