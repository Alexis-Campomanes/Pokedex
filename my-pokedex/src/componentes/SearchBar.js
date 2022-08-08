import React from "react";
import { useState } from "react";
import { searchPokemon } from "../Api/api";
import styles from "../module/SearchBar.module.css"


export function SearchBar (){
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] =useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    
    const onClick = async (e) => {
        const data = await searchPokemon (search)
        setPokemon(data);
    }
    return(
        <div>
            <div className={styles.serchDisplay}>
                <div className={styles.searchPokemon}>
                <input 
                    className={styles.inputPokemon}
                    placeholder="Buscar Pokemón..."
                    type="texto"
                    onChange={onChange}
                     />
                </div>
                <div>
                    <button className= {styles.buttonSearch} onClick={onClick}>
                        <box-icon name='search-alt'></box-icon>
                    </button>
                </div>
            </div>
            <div>
                {pokemon &&
                <div>
                    <img src ={ pokemon.sprites.front_default } alt="poke" />
                    <div>Pokemon: {pokemon.species.name}</div>
                    <div>Tipo: {pokemon.types[0].type.name}</div>
                    <div>Peso: {pokemon.weight} kg.</div>

                </div>
                }
            </div>

        </div>
    );
}