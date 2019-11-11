import React from 'react';

export function SideBarComponent ({movieGenres}) {
    return ( 
        <ul className="list-group">
            <button type="button" className="list-group-item list-group-item-action active">
                All Genres
            </button>
            {
                movieGenres.map ( genre =>
                <button type="button" className="list-group-item list-group-item-action" key={genre._id} >
                    {genre.name}
                </button>
                )
            }
        </ul> 
    );
}