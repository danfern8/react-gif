
export const getGif = async(category) => { // TODO ESTO ES UNA PROMESA

    const url= `https://api.giphy.com/v1/gifs/search?api_key=UMdxNF9j9GxI1dwiq3MXDvT53jLFcUEy&q=${category}&limit=10`;
    const resp= await fetch(url);
    const {data} = await resp.json(resp); //{data} Es un array y me lo fragmenta

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })); //Puedo usar map porque es iterable
    // console.log("gifs:",gifs)
    return gifs;

}