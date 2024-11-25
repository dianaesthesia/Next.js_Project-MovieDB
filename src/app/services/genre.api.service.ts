import {baseUrl, optionsWithToken, urls} from "@/app/constants/urls";
import {IResponseGenreModel} from "@/app/models/IResponseGenreModel";

const genreApiService = {
    getAll: (): Promise<IResponseGenreModel> => fetch(baseUrl + urls.genres.base(), optionsWithToken).then(value => value.json())
}

export {genreApiService};