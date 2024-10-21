import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>CARGANDO...</h2> //Si es true ejecuta la 2 instrucción (h2), si es false nada.
            }

            <ol>
                {
                    images.map((image)=>(
                       <GifItem 
                       key={image.id} 
                       title={image.title}
                       url={image.url}
                       />
                    ))
                }
            </ol>
        </>
    )
}