import React, { Component } from 'react';
import LikeComponent from "./common/LikeComponent";


class MoviesTable extends Component {
    raiseSort = path => {
        const sortedColumn = {...this.props.sortedColumn};

        if ( sortedColumn.path === path )
        sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
        else{
        sortedColumn.path = path;
        sortedColumn.order = "asc";
        }

        this.props.onSort( sortedColumn );
    }

    render() { 
        const { movies, onLike, onDelete } = this.props;

        return (
            <table className="table">
                <thead>
                <tr>
                    <th onClick={ () => this.raiseSort("title")}>Title</th>
                    <th onClick={ () => this.raiseSort("genre.name")}>Genre</th>
                    <th onClick={ () => this.raiseSort("numberInStock")}>Stock</th>
                    <th onClick={ () => this.raiseSort("dailyRentalRate")}>Rate</th>
                    <th></th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {movies.map(movie => {
                    return (
                    <>
                        <tr id={movie._id}>
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
    }
}

export default MoviesTable;