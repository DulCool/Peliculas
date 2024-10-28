
import React, { useState } from 'react';

export const Buscador = ({ setPeliculasFiltradas, listadoState }) => {
    const [busqueda, setBusqueda] = useState("");

    const buscarPeli = (e) => {
        e.preventDefault();
        
        let miBusqueda = e.target.value.toLowerCase();
        setBusqueda(miBusqueda);

        // Filtrar las películas por título
        let pelis_filtradas = listadoState.filter(peli => 
            peli.titulo.toLowerCase().includes(miBusqueda)
        );

        setPeliculasFiltradas(pelis_filtradas);  // Actualizar las películas filtradas
    };

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                    type="text" 
                    id="search_field" 
                    value={busqueda} 
                    onChange={buscarPeli} 
                    placeholder="Buscar película..." 
                />
                <button id="search" onClick={buscarPeli}>Buscar</button>
            </form>
        </div>
    );
}
