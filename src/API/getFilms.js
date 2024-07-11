import axios from "axios"

// const API_KEY = `api_key=2c3cd3a65544946d165e63f40e85ca71`
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNjZDNhNjU1NDQ5NDZkMTY1ZTYzZjQwZTg1Y2E3MSIsIm5iZiI6MTcyMDYwNDMyOS45ODkwNTEsInN1YiI6IjY2OGU1MTg5NDczZDkzNDljYzBkNDBjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BYC62vie0cEtfcrzvyYrniMBqJMIQizyaN95zIOCsOg"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`


export async function getMovies(newPage) {
    const res = await axios.get(`/trending/movie/day?language=en-US&page=${newPage}&`)
    return res.data
}

export async function getMovie(movieId) {
    const res = await axios.get(`/movie/movie/movie_id=${movieId}?language=en-US`)
    console.log(res.data);
    return res.data
}


