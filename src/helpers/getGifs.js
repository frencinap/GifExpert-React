
export const getGifs = async( category ) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(category)}&limit=12&api_key=kQ50E0uTSpq7EGd7Nau8q6hA3EgxiN1P`
    const resp = await fetch( url )
    const { data } = await resp.json()
    //console.log(data);

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            //url: img.images?.downsized_medium.url
            url: img.images?.fixed_width.url
        }
    })
    // console.log(gifs);
    // setImages(gifs)
    return gifs
}