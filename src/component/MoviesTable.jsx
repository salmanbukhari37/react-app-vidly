import React, { Component } from 'react';
import LikeComponent from "./common/LikeComponent";
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';


class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like', content: movie => (
            <LikeComponent 
                onClick={() => this.props.onLike(movie)}
                liked={movie.liked}
            />
        )},
        { key: 'delete', content: movie => (
            <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(movie)}
                >
                Delete
            </button>
        )},
        
    ];

    render() { 
        const { movies, sortedColumn, onSort } = this.props;

        return (
            <table className="table">
                <TableHeader columns={this.columns} sortedColumn={sortedColumn} onSort={onSort} />
                <TableBody data={movies} columns={this.columns} />
            </table>
        );
    }
}

export default MoviesTable;