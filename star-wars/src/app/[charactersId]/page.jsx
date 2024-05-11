import { fetchCharacterDetails } from "../../api/routes";

export default async function charactersDetailPage({ params }) {
  const { charactersId } = params;
  const charactersDetail = fetchCharacterDetails(charactersId);
  const { name, eye_color, gender } = charactersDetail;

  return (
    <div>
      <h1>{name}</h1>
      <p>{eye_color}</p>
      <p>{gender}</p>
    </div>
  );
}
