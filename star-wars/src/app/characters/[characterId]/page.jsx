import { fetchCharacterDetails } from "../../api/routes";
import Image from "next/image";
import charactersImg from "../../img/characters.png";

export default async function charactersDetailPage({ params }) {
  const { characterId } = params;
  const charactersDetail = await fetchCharacterDetails(characterId);

  const { name, eye_color, gender } = charactersDetail;

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
    </div>
  );
}
