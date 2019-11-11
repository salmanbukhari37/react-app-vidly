import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "font-awesome/css/font-awesome.min.css";
import LikeComponent from "./common/LikeComponent";
import PaginationComponent from "./common/PaginationComponent";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from '../utils/paginate'
import { SideBarComponent } from "./common/SideBarComponent";


class MoviesComponent extends Component {
  state = {
    movies: [],
    movieGenres: [],
    pageSize: 5,
    currentPage: 1
  };

  componentDidMount() {
    setInterval( () => {
      this.setState({ movies: getMovies(), movieGenres: getGenres() })
    }, 1000)
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

   handlePageChange = page => {
     console.log(page);
     
    this.setState({ currentPage: page });
  };

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  fetchTableData() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      movieGenres
    } = this.state;

    if (this.state.movies.length === 0)
      return (
        <div className="row" style={{backgroundColor: "#999"}}>
          <svg width="38" height="38" viewBox="0 0 38 38" style={{textAlign: "center"}} >
              <defs>
                  <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                      <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
                      <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
                      <stop stop-color="#fff" offset="100%"/>
                  </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                  <g transform="translate(1 1)">
                      <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                          <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="0.9s"
                              repeatCount="indefinite" />
                      </path>
                      <circle fill="#fff" cx="36" cy="18" r="1">
                          <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="0.9s"
                              repeatCount="indefinite" />
                      </circle>
                  </g>
              </g>
          </svg>
      </div>);

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <div className="row">
          <div className="col-2">
            <SideBarComponent movieGenres={movieGenres}/>
          </div>
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
            <PaginationComponent 
              itemsCount={count}
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
