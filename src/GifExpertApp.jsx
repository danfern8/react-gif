//import React from "react";
import { useState } from 'react';
import { AddCategory,GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

        const [categories, setCategories] = useState(['One Punch'])

        const onAddCategory = (newCategory) => {
            if (categories.includes(newCategory)) return;
            setCategories([...categories, newCategory]);
        }
        // console.log(categories);
        return (
            <>
                <h1>GifExpertApp</h1>

                {/* INPUT */}
                <AddCategory onNewCategory= {(value) => onAddCategory(value)}/> {/*Prop setCategories que llama a la función setCategories */}
                {/* En vez de value puedes poner event. Lo que quieras */}
                {/* <AddCategory onNewCategory= {onAddCategory}/> TAMBIEN SE PUEDE HACER ASI */}


                
                {categories.map( category => ( //Se puede hacer así sin return. Devolvemos ese objeto
                            <GifGrid 
                                key= {category}
                                category= {category}
                            />
                        )
                    )
                }
                

            </>
        )
}