export const getCharacters = async (p) => {
  
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${p}`;
  const res = await fetch(apiUrl);
  const response = await res.json();

  const { results } = response;

  const allResults = results.map(result => {
    const { id, name, species, status, gender, image } = result;

    return { id, name, species, status, gender, image }
  });

  return allResults;
}