import { fetchMovies } from "../../../api/routes";
import Image from "next/image";
import filmsImg from "../../../img/films.jpg";
import Link from "next/link";

const Movies = async () => {
    const movies = await fetchMovies();
  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Movies</h1>
    <ul className="flex flex-wrap">
      {movies.map((movie) => (
        <li key={movie.episode_id} className="w-1/3 p-4">
          <div className="flex flex-col items-center"> 
        <Link href={`${movie.episode_id}` } prefetch={false}>
          <p>{movie.title}</p>
          </Link>
          <p>{movie.episode_id}</p>
          <Image
            src={filmsImg}
            alt="Imagen Genérica"
            width={300}
            height={300}
          />
          </div>
        </li>
      ))}
    </ul>
    <Link href="/">Volver</Link>
  </div>
  )
}

export default Movies