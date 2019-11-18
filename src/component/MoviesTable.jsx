import React, { Component } from 'react';
import LikeComponent from "./common/LikeComponent";
import Table from './common/Table';

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
           <Table data={movies} sortedColumn={sortedColumn} onSort={onSort} columns={this.columns}/>
        );
    }
}

export default MoviesTable;