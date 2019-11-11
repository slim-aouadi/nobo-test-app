let defaultState = {
    listMovies: [],
    movieDetails: null,
}


export default function (state = defaultState, action) {
    if (action.type === "FETCH_MOVIES") {
        return {
            ...state,
            listMovies: action.payload
        }
    }
    else if (action.type === "FETCH_MOVIE_DETAILS") {
        return {
            ...state,
            movieDetails: action.payload
        }
    }
    else if (action.type === "FETCH_MOVIE_DETAILS_API") {

        let selectedMovie = {

            show: {
                name: action.payload.name,
                image: action.payload.image,
                type: action.payload.type,
                language: action.payload.language
            }
        }

        return {
            ...state,
            movieDetails: selectedMovie
        }
    }
    else {
        return {
            ...state
        }

    }

}
