import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "font-awesome/css/font-awesome.min.css";
import LikeComponent from "./common/LikeComponent";
import PaginationComponent from "./common/PaginationComponent";

class MoviesComponent extends Component {
  state = {
    movies: getMovies()
  };

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  changeStatus() {
    console.log("hey");
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  fetchTableData() {
    if (this.state.movies.length === 0)
      return <p className="error">There are no movies in our database</p>;

    return (
      <>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <div className="col">
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
              {this.state.movies.map(movie => {
                return (
                  <>
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <LikeComponent
                          onClick={() => this.handleLike(movie)}
                          liked={movie.liked}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.deleteMovie(movie)}
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
          <PaginationComponent />
        </div>
      </>
    );
  }

  render() {
    return this.fetchTableData();
  }
}

export default MoviesComponent;
