import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) =>{

    const [inputValue, setInputValue]= useState('');

    const onInputChange = (event) =>{
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const valueClean= inputValue.trim(); //Borra espacios delante y detras
        if(valueClean.length <= 1) return; //Comprueba tamanio
        //setCategories(categories => [ ...categories,inputValue]);
        
        onNewCategory(valueClean)
        setInputValue('');
    }

    return (
        <form onSubmit= {onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
    )
}