import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';


export const GifGrid = ({category}) => {
   const {data,loading}= useFetchGifs({category});
    //               const [images, setImages] = useState([]);
//                useEffect(()=>{
//                    getGifs(category).then(setImages);
 //               },[])
                
    
    return (
    <div className='card-grid'>
        <h2 className='sub'>{category}</h2>
        {loading && <p>Loading</p>}
            {
            data.map(img=>(
                <GifGridItem 
                img={img}
                key={img.id}
                {...img}
                />
            ))
            }
        
    </div>
  )
}
