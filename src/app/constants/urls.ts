const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhODNmNzYzMWFmNWNkOWViMDFmNDBmMTMyOGI0OSIsIm5iZiI6MTczMTYwNTc2MS4xMjM3OTUzLCJzdWIiOiI2NjcyYzU2OWJjYWJmNzNlODQyYTY2MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UUf6iz-k8eecwt2BENEvRu7iq1WL8sYT7TlUhkxZdfw';
const movies = '/discover/movie?page=';
const movie = '/movie';
const searchMovie = '/search/movie?page=';
const genres = '/genre/movie/list';
const moviesGenre = '&with_genres=';
const byQuery = '&query=';

const urls = {
    movies: {
        base: (page: string) => `${movies}${page}`,
        byId: (id: number) => `${movie}/${id}`,
        withGenres: (genreId: number) => `${moviesGenre}${genreId}`,
        byQuery: (page: string, query: string) => `${searchMovie}${page}${byQuery}${query}`
    },
    genres: {
        base: () => `${genres}`
    }
};

const optionsWithToken = {
    headers: {Authorization: token}
};

export {baseUrl, imageBaseUrl, token, urls, optionsWithToken};