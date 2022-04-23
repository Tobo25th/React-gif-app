export const getGifs = async(category)=>{
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=6&api_key=Vub5FrFdF4L2obOQ45ozGiMdMc3r38Qm`

    const answer=await fetch(url);

    const {data} = await answer.json();

    const gifs = data.map(img=>{
        return{
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
  }