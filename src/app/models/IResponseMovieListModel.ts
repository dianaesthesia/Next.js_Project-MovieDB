import {IMovieListModel} from "@/app/models/IMovieListModel";

export interface IResponseMovieListModel {
    page: number;
    results: IMovieListModel[];
    total_pages: number;
    total_results: number;
}