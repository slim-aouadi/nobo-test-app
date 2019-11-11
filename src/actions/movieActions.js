export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS'
export const FETCH_MOVIE_DETAILS_API = 'FETCH_MOVIE_DETAILS_API'


export const fetchMovies = (searchInput) => (dispatch) => {
    fetch('https://api.tvmaze.com/search/shows?q=' + searchInput)
        .then(res => res.json())
        .then(foundResults => dispatch({
            type: FETCH_MOVIES,
            payload: foundResults,
        }
        ));
}

export const fetchMovieDetails = (movie) => (dispatch) => {
    dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: movie,
    })
}

export const findMovieByName = (nom) => (dispatch) => {

    fetch('http://api.tvmaze.com/singlesearch/shows?q=' + nom)
        .then(res => res.json())
        .then(selectedMovie => dispatch({
            type: FETCH_MOVIE_DETAILS_API,
            payload: selectedMovie,

        }
        ));
}
