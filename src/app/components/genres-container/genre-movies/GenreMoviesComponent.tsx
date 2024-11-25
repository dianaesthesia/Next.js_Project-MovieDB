import React, {FC} from 'react';
import Link from "next/link";

import {movieApiService} from "@/app/services/movie.api.service";
import MovieListComponent from "@/app/components/movies-container/movies-list/MovieListComponent";
import PaginationComponent from "@/app/components/pagination-container/PaginationComponent";
import styles from './GenreMoviesComponent.module.css';

interface IProps {
    genreId: string,
    currentPage: string
}

const GenreMoviesComponent: FC<IProps> = async ({genreId, currentPage}) => {
    const moviesWithGenreId = await movieApiService.getByGenreId(currentPage, genreId);

    return (
        <div className={styles.Movies_with_pagination_genre}>
            <div className={styles.Movies_genre}>
            {moviesWithGenreId.results.map(movieWithGenreId => <div key={movieWithGenreId.id} className={styles.MovieCard_genre}>
                    <Link href={`/movies/${movieWithGenreId.id}`}><MovieListComponent movie={movieWithGenreId}/></Link>
                </div>)}
            </div>
            <div className={styles.Pagination}>
                <PaginationComponent currentPage={currentPage} totalPages={moviesWithGenreId.total_pages}/>
            </div>
        </div>
    );
};

export default GenreMoviesComponent;