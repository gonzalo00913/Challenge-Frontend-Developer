import { fetchMovies } from "../../../api/routes";
import Image from "next/image";
import filmsImg from "../../../img/film.jpg";
import Link from "next/link";

const Movies = async () => {
  const movies = await fetchMovies();
  return (
    <div className="max-w-3xl mx-auto px-4 m-10">
      <h1 className="text-2xl font-bold text-center mb-4">Peliculas</h1>
      <ul className="flex flex-wrap">
        {movies.map((movie) => (
          <li key={movie.episode_id} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="flex flex-col items-center">
             
              <Link href={`/movies/${movie.episode_id}`} prefetch={false}>
              <Image src={filmsImg} alt="Imagen Genérica" width={300} height={300} />
              </Link>
              <p>{movie.title}</p>
              <p>Episodio: {movie.episode_id}</p>
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

export default Movies;
