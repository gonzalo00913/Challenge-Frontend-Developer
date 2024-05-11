import { fetchMovieDetails } from "../../api/routes";
import Image from "next/image";
import detailsImg from "../../img/film.jpg"
import Link from "next/link";

export default async function MoviesDetailPage({ params }) {
    const {moviesId} = params;
    const movieDetails = await fetchMovieDetails(moviesId);
    const { title, episode_id, director } = movieDetails;
    return(
        <div>
        <h1>Title: {title}</h1>
        <Image
            src={detailsImg}
            alt="Imagen Genérica"
            width={300}
            height={300}
          />
        <p>Episode: {episode_id}</p>
        <p>Director: {director}</p>
        <Link href="/">Volver</Link>
        </div>
    )
  }