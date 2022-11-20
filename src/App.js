import {React,useEffect,useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


const API_URL ='http://www.omdbapi.com?apikey=e77d67a0';



const App = ()=>{

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');


    const searchMovies = async (title)=>{
        const resopnse = await fetch(`${API_URL}&s=${title}`);

        const data= await resopnse.json();
        console.log(data);

        setMovies(data.Search);

    }

    useEffect(()=>{
     searchMovies('avengers');
    },[]);

    return(
        <div className="app">

         <h1>MoviesDock</h1>

           <div className="search">
            <input
              placeholder='Search for movies'
              value={searchTerm}
              onChange={(e)=> {
                return setSearchTerm(e.target.value)

              }}
            /> 
            <img
            src={SearchIcon}
            alt="search" 
            onClick={()=>{
                return searchMovies(searchTerm)
            }}
            />
            </div>  
            {
                movies.length > 0 ?
                 (
                     <div className='container'>
         
                     {movies.map((movie)=>(
                       <MovieCard movie={movie} />        
                     ))}
         
                      </div>

                ) : 
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )

            }
             
        <footer class="footer">
            <div class="icon">
                <ul>
                    <li class="list-inline"><a href="https://github.com/Snow-Bull" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li class="list-inline"><a href="https://twitter.com/SusmitMukherje5" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i>

</a></li>
                    <li class="list-inline"><a href="https://www.linkedin.com/in/susmit-mukherjee-5aa8211b5/"
                            target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>

        </footer>
    
           

        </div>
        
        
        
        
    );

}

export default App;