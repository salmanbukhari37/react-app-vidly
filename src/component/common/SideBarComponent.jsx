import React from 'react';

export function SideBarComponent (props) {
    const {movieGenres, textProperty, valueProperty, selectedItem, onItemSelect} = props;
    const listClass = "list-group-item list-group-item-action";
    return ( 
        <ul className="list-group" >
            {
                movieGenres.map ( genre =>
                <button type="button"  className={ genre._id === selectedItem ? `${listClass} active`  : `${listClass}`} key={genre[valueProperty]} onClick={() => onItemSelect(genre[valueProperty])} >
                    {genre[textProperty]}
                </button>
                )
            }
        </ul> 
    );
}

SideBarComponent.defaultProps = {
    textProperty : "name",
    valueProperty : "_id"
};