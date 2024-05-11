import { fetchCharacterDetails } from "../../api/routes";
import Image from "next/image";
import charactersImg from "../../img/characters.png";
import Link from "next/link";

export default async function charactersDetailPage({ params }) {
  const { characterId } = params;
  const charactersDetail = await fetchCharacterDetails(characterId);

  const { name, eye_color, gender, height, birth_year, skin_color, mass } = charactersDetail;

  return (
    <div>
      <p>Name: {name}</p>
      <Image
        src={charactersImg}
        alt="Imagen Genérica"
        width={300}
        height={300}
      />
      <p>Eye color: {eye_color}</p>
      <p>Gender: {gender}</p>
      <p>height: {height}</p>
      <p>birth_year: {birth_year}</p>
      <p>skin_color: {skin_color}</p>
      <p>mass: {mass}</p>
      <Link href="/characters">Volver</Link>
    </div>
  );
}
