import React, { useEffect, useState } from "react"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"
import { Movies } from "../components/Movies"

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const searchMovies = (str, type = 'all') => {

        setIsLoading(true);
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setIsLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=all`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setIsLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false)
            });
    }, [])

    return (

        <main className="container content">
            <Search searchMovies={searchMovies} />
            {
                isLoading ?
                    <Preloader />
                    : (<Movies movies={movies} />)
            }

        </main>

    )
}


export { Main }