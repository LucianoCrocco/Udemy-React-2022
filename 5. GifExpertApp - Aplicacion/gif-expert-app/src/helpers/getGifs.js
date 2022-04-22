export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Gqmh1Vt5CDRSIfZxED6UZApWI2ozHjtd&q=${encodeURI(category)}&limit=15`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
        id : img.id,
        title: img.title,
        url : img.images?.downsized_medium.url
        }
    })
    return gifs;
}