
import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setLoading(false);
    }

    //1-Parametro=FUNCION
    //2-Parametro=DEPENDENCIA(opcional) devuelve si valores referenciados del 1 parametro cambian
    useEffect(()=>{
        getImages();
    }, [])

  return {
    images, //Es lo mismo que images:images
    isLoading:isLoading,
  }
}
