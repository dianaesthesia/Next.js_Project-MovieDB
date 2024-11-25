import {baseUrl, optionsWithToken, urls} from "@/app/constants/urls";
import {IResponseMovieListModel} from "@/app/models/IResponseMovieListModel";
import {IMovieCardModel} from "@/app/models/IMovieCardModel";

const movieApiService = {
    getAll: (page: string): Promise<IResponseMovieListModel> => fetch(baseUrl + urls.movies.base(page), optionsWithToken).then(value => value.json()),
    getById: (id: string): Promise<IMovieCardModel> => fetch(baseUrl + urls.movies.byId(+id), optionsWithToken).then(value => value.json()),
    getByGenreId: (page: string, genreId: string): Promise<IResponseMovieListModel> => fetch(baseUrl + urls.movies.base(page) + urls.movies.withGenres(+genreId), optionsWithToken).then(value => value.json()),
    getByQuery: (page: string, query: string): Promise<IResponseMovieListModel> => fetch(baseUrl + urls.movies.byQuery(page, query), optionsWithToken).then(value => value.json())
};

export {movieApiService};