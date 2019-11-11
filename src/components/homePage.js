import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from "react-redux"
import * as actionCreators from "../actions/movieActions"
import { fetchMovieDetails } from "../actions/movieActions";
import { width } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: "",
            movieDetails: null,
        };


    }

    handleInputSearchChange = (value) => {
        this.setState({ searchInputValue: value })
    }
    handleSearch = () => {
        this.props.fetchMovies(this.state.searchInputValue)
    }


    handleSelectItem = (movie) => {
        this.props.fetchMovieDetails(movie)
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({ searchInputValue: e.target.value })
            this.props.fetchMovies(e.target.value)
        }
    }


    render() {
        let root = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        };

        let gridList = {
            width: '64%',
            height: 450,
        };
        return (
            <React.Fragment>
                <div className='search'>
                    <TextField
                        id="standard-basic"
                        label="Search Movie"
                        margin="normal"
                        onChange={e => this.handleInputSearchChange(e.target.value)}
                        onKeyPress={e => this.handleKeyPress(e)}
                    />
                    <Button variant="contained" color="primary" onClick={e => this.handleSearch()} >
                        Search
                   </Button>
                </div>
                <div style={root}>
                    <GridList cellHeight={180} style={gridList}>
                        <GridListTile key="Subheader" cols={2} >
                            <ListSubheader component="div" style={{textAlign:'center'}}>Found Results</ListSubheader>
                        </GridListTile>
                        {
                            this.props.listMovies.map(movie => (

                                <GridListTile className="GridListTile" key={movie.show.id} onClick={() => this.handleSelectItem(movie)}>
                                    <Link to={`/detailPage/${movie.show.name}`} >
                                        {movie.show.image != null ?
                                            <img src={movie.show.image.medium} alt={movie.show.name} />
                                            :
                                            <img src="./images/defaultMovie.jpg" alt={movie.show.name} />}
                                        <GridListTileBar
                                            className="GridListTileBar"
                                            title={movie.show.name}

                                            actionIcon={
                                                <IconButton aria-label={`info about ${movie.show.name}`} >
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </Link>
                                </GridListTile>

                            ))
                        }
                    </GridList>
                </div>
            </React.Fragment >
        )
    }
}


const mapStateToProps = state => ({
    listMovies: state.movie.listMovies,
    movieDetails: state.movie.movieDetails
})

export default connect(mapStateToProps, actionCreators)(HomePage);
