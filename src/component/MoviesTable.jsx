// @flow 
import * as React from 'react';
import LikeComponent from "./common/LikeComponent";

type Props = {
    
};

 const MoviesTable = ({ movies, onLike, onDelete }: Props) => {


    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {movies.map(movie => {
                return (
                <>
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <LikeComponent
                        onClick={() => onLike(movie)}
                        liked={movie.liked}
                        />
                    </td>
                    <td>
                        <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(movie)}
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                </>
                );
            })}
            </tbody>
        </table>
    );
};

export default MoviesTable;