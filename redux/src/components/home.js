import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesList, getUsers } from '../store/actions'

class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviesList());
  }
  getUsersHandler() {
    this.props.dispatch(getUsers());
    console.log(this.props);
  }
  render() {
    const { movies } = this.props; 
    return (
      <div>
        { Array.isArray(movies) ?
          movies.map(item => {
            return <div key={item.name}>
              name: {item.name}
            </div>
          }) : null}
        <button onClick={()=> this.getMoviesHandler()}>
          Get movies
        </button>
        <button onClick={()=> this.getUsersHandler()}>
          Get users
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

export default connect(mapStateToProps)(Home);
