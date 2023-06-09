import React from "react";

const ListaRemovidos = ({lista}) => {
    
    const renderizaLista = lista.map((item) =>{
        return (
            <li>
                {item}
            </li>
        )
    })


    return (
        <ul>
            {renderizaLista}
        </ul>
    )
}

export default ListaRemovidos