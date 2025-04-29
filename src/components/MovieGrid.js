import '../styles.css';
import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard.js';

export default function MovieGrid(){

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('Fetching movies.json')
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    const handleSearchChange = (e) => {
        console.log('Setting Search Term')
        setSearchTerm(e.target.value)
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())        
    );

    return (
        <div>
            <input 
                className='search-input'
                type='text'
                placeholder='Search Movies...'
                value={searchTerm}
                onChange={handleSearchChange}/> 
            <div className='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))
                }
            </div>
        </div>
    );
}