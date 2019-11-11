import React, { Component } from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/movieActions'
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        if (this.props.movieDetails === null) {
            let name = this.props.match.params.name
            this.props.findMovieByName(name)
        }
    }
    renderElement() {
        if (this.props.movieDetails !== null)
            return (
                <React.Fragment>
                    <div className="detailPage">
                        <img src={this.props.movieDetails.show.image === null ? "/images/defaultMovie.jpg" : this.props.movieDetails.show.image.medium} />
                        <h1>{this.props.movieDetails.show.name}</h1>
                        <h3>Movie language : <span style={{ color: 'red' }}>{this.props.movieDetails.show.language} </span></h3>
                        <h3>Movie type : <span style={{ color: 'red' }}>{this.props.movieDetails.show.type}</span></h3>
                    </div>
                </React.Fragment>
            );
        else
            return null;
    }


    render() {
        return (

            <div>

                <br />

                <Button variant="contained" color="primary" onClick={() => this.props.history.push("/")}>
                    Previous
                  </Button>


                {this.renderElement()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listMovies: state.movie.listMovies,
    movieDetails: state.movie.movieDetails
})

export default connect(mapStateToProps, actionCreators)(DetailPage);

