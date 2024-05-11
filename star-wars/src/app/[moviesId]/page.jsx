import { fetchMovieDetails } from "../api/routes";

export default async function MoviesDetailPage({ params }) {
    const { moviesId } = params;
    const movieDetails = await fetchMovieDetails(moviesId);
    const { title, episode_id, director } = movieDetails;
    return(
        <div>
        <h1>{title}</h1>
        <p>{episode_id}</p>
        <p>{director}</p>
        </div>
    )
  }