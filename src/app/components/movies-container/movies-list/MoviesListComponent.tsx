import React, {FC} from 'react';
import Link from "next/link";

import {movieApiService} from "@/app/services/movie.api.service";
import MovieListComponent from "@/app/components/movies-container/movies-list/MovieListComponent";
import PaginationComponent from "@/app/components/pagination-container/PaginationComponent";
import styles from './MoviesListComponent.module.css';

interface IProps {
    currentPage: string
    query?: string | null
}

const MoviesListComponent: FC<IProps> = async ({currentPage, query}) => {
    let movies;
    if (query) {
        movies =  await movieApiService.getByQuery(currentPage, query);
    }
    else {
        movies =  await movieApiService.getAll(currentPage);
    }

    return (
        <div className={styles.Movies_with_pagination}>
            <div className={styles.Movies}>
                {movies.results.map(movie => <div key={movie.id} className={styles.MovieCard}>
                    <Link href={`/movies/${movie.id}`}><MovieListComponent movie={movie}/></Link>
                </div>)}
            </div>
            <div className={styles.Pagination}>
                <PaginationComponent currentPage={currentPage} totalPages={movies.total_pages}/>
            </div>
        </div>
    );
};

export default MoviesListComponent;