import { fetchMovieDetails } from "../../api/routes";
import Image from "next/image";
import detailsImg from "../../img/film.jpg";
import Link from "next/link";

export default async function MoviesDetailPage({ params }) {
  const { moviesId } = params;
  const movieDetails = await fetchMovieDetails(moviesId);
  const { title, episode_id, director } = movieDetails;
  return (
    <div className="max-w-3xl mx-auto px-4 m-10">
      <h1 className="text-2xl font-bold text-center mb-4">Detalles de la Película</h1>
      <div className="flex flex-col items-center">
        <h2 className="mb-2">Title: {title}</h2>
        <Image src={detailsImg} alt="Imagen Genérica" width={300} height={300} />
        <p>Episode: {episode_id}</p>
        <p>Director: {director}</p>
      </div>
      <div className="text-center mt-4">
        <Link href="/movies">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
