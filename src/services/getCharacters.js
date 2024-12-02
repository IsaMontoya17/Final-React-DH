export const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    if (response.ok) {
        return data;
    } else {
        throw new Error('Error fetching characters');
    }
}