export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=au2K0eV8kwS5HvKwsO4mtrG5kxPlpnWc&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }));

    return gifs;
}