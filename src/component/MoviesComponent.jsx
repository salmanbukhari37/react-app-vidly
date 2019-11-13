import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "font-awesome/css/font-awesome.min.css";
import PaginationComponent from "./common/PaginationComponent";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from '../utils/paginate'
import { SideBarComponent } from "./common/SideBarComponent";
import MoviesTable from './MoviesTable';

class MoviesComponent extends Component {
  state = {
    movies: [],
    movieGenres: [],
    pageSize: 5,
    currentPage: 1,
    selectedGenre: ''
  };

  componentDidMount() {
    const movieGenres = [{name: "All Genres"} , ...getGenres()]
    this.setState({ movies: getMovies(), movieGenres })
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

   handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  handleGenreSelect = _id => {
    this.setState({ selectedGenre: _id, currentPage: 1 })
  }

  fetchTableData() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      movieGenres,
      selectedGenre
    } = this.state;

    if (this.state.movies.length === 0)
      return <p>Loading...</p>

    const filteredMovies = selectedGenre ? allMovies.filter( m => m.genre._id === selectedGenre ) : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <>
        <p>Showing {filteredMovies.length} movies in the database.</p>
        <div className="row">
          <div className="col-2">
            <SideBarComponent 
              selectedItem={this.state.selectedGenre} 
              movieGenres={movieGenres} 
              onItemSelect={this.handleGenreSelect}/>
          </div>
          <div className="col">
            <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.deleteMovie} />
            <PaginationComponent 
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }

  render() {
    return this.fetchTableData();
  }
}

export default MoviesComponent;
