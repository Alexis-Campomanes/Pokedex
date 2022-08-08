import React from "react";
import styles from "../module/Nanvbar.module.css"

export function NanvBar(){
    let NanvBar = "https://pokedexproject1.herokuapp.com/images/Pokedex.png"
    return (
    <nav>
        <div className={styles.position}>
            <img src= { NanvBar } alt="pokedex.logo" className={styles.logo}/>
        </div>
    </nav>
    );
}
    
