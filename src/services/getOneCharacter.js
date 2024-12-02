export const getOneCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    if (response.ok) {
        return data;
    } else {
        throw new Error('Error fetching character');
    }
}