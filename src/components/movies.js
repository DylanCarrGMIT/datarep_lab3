import React, {Component} from 'react';
import MovieItem from './movieItem';
export class Movies extends Component
{
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        });
        ;
    }
}
export default Movies;