const BASE_URL = 'https://swapi.dev/api/';

export async function fetchMovies() {
  const response = await fetch(`${BASE_URL}films/`);
  const data = await response.json();
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}films/${movieId}/`);
  const data = await response.json();
  return data;
}

export async function fetchCharacters() {
  const response = await fetch(`${BASE_URL}people/`);
  const data = await response.json();
  return data.results;
}

export async function fetchCharacterDetails(characterId) {
  const response = await fetch(`${BASE_URL}people/${characterId}/`);
  const data = await response.json();
  return data;
}
