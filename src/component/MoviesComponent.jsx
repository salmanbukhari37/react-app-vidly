import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "font-awesome/css/font-awesome.min.css";
import PaginationComponent from "./common/PaginationComponent";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from '../utils/paginate'
import { SideBarComponent } from "./common/SideBarComponent";
import MoviesTable from './MoviesTable';
import _ from 'lodash';
import NavBar from "./common/NavBar";

class MoviesComponent extends Component {
  state = {
    movies: [],
    movieGenres: [],
    pageSize: 5,
    currentPage: 1,
    selectedGenre: '',
    sortedColumn : { path: "title", order: "asc"}
  };

  componentDidMount() {
    const movieGenres = [{ _id: "", name: "All Genres"} , ...getGenres()]
    this.setState({ movies: getMovies(), movieGenres })
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

   handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  handleSort = sortedColumn => {
    this.setState({sortedColumn})
  };

  handleGenreSelect = _id => {
    this.setState({ selectedGenre: _id, currentPage: 1 })
  }

  getPagedData () {

    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortedColumn
    } = this.state;


    const filteredMovies = selectedGenre ? allMovies.filter( m => m.genre._id === selectedGenre ) : allMovies;

    const sorted = _.orderBy(filteredMovies, [sortedColumn.path], [sortedColumn.order]);
    
    const movies = paginate(sorted, currentPage, pageSize);

    return {
      countedMovies : filteredMovies.length, 
      data: movies
    }
  }


  fetchTableData() {
    const {
      currentPage,
      pageSize,
      movieGenres,
      sortedColumn
    } = this.state;

    const {countedMovies, data: movies} = this.getPagedData();

    return (
      <>
        <NavBar />
        <div className="container">
          <p>Showing {countedMovies} movies in the database.</p>
          <div className="row">
            <div className="col-2">
              <SideBarComponent 
                selectedItem={this.state.selectedGenre} 
                movieGenres={movieGenres} 
                onItemSelect={this.handleGenreSelect}/>
            </div>
            <div className="col">
              <MoviesTable 
                movies={movies} 
                sortedColumn={sortedColumn}
                onLike={this.handleLike} 
                onDelete={this.deleteMovie} 
                onSort={this.handleSort}/>
              <PaginationComponent 
                itemsCount={countedMovies}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
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
