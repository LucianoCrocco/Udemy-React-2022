export const getImagen = async() => {

    try {
        const apiKey = 'Gqmh1Vt5CDRSIfZxED6UZApWI2ozHjtd';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.error(error)
    }
}



