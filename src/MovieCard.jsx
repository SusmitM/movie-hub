import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <span>
                    {
                    (()=>{
                    if(movie.Type === 'movie'){
                        return(<a href={'https://www.2embed.to/embed/imdb/movie?id='+movie.imdbID} target="_blank" rel="noreferrer">
                        <h3><button>Watch Now</button></h3></a>)
                    }
                    else {
                        return(<a href={'https://www.2embed.to/embed/imdb/tv?id='+movie.imdbID+'&s=1&e=1'} target="_blank" rel="noreferrer">
                        <h3><button>Watch Now</button></h3></a>)

                    }
                })()}</span>
                


                
            </div>
        </div>
    );
}

export default MovieCard;