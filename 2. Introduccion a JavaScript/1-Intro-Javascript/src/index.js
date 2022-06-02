const api_key = "Gqmh1Vt5CDRSIfZxED6UZApWI2ozHjtd";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticion
.then(res => res.json())
.then(({data}) =>{
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);